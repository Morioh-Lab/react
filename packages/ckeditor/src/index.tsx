import useResource from "@morioh/r-resource";
import { useEffect, useRef } from "react";


type EditorProps = {

    onChange: Function,
    onReady?: Function,
    onFocus?: Function,
    onBlur?: Function,
    onKeydown?: Function,
    value?: string | null,
    config?: any,
    disabled?: boolean,
    className?: string
}


declare const window: any;

function Editor(props: EditorProps): JSX.Element | null {

    const root = useRef<HTMLDivElement>(null);
    const instance = useRef<any>();

    const [loading] = useResource([
        {
            tag: 'link',
            id: 'ckeditor-css',
            rel: 'stylesheet',
            href: 'https://cdn.morioh.com/ckeditor/v31.2/ckeditor.css',
        },
        {
            tag: 'script',
            id: 'ckeditor-js',
            src: 'https://cdn.morioh.com/ckeditor/v31.2/ckeditor.js'
        }
    ]);



    useEffect(() => {

        if (loading) return;

        const config = {
            ...props.config,
            initialData: props.config?.initialData || props.value || ''
        };

        window.CKEditor.create(root.current, config).then((editor: any) => {
            if ('disabled' in props) {
                editor.isReadOnly = props.disabled;
            }

            instance.current = editor;

            // root.current.className = "border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 transition dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500";

            const view = editor.editing.view.document;

            editor.model.document.on('change:data', (event: any) => {
                /* istanbul ignore else */
                if (props.onChange && root.current) {
                    const text = root.current.innerText;
                    const html = editor.getData();
                    props.onChange({ event, editor, text, html });
                }
            });

            view.on('focus', (event: any) => {
                /* istanbul ignore else */
                if (props.onFocus) {
                    props.onFocus(event, editor);
                }
            });

            view.on('blur', (event: any) => {
                /* istanbul ignore else */
                if (props.onBlur) {
                    props.onBlur(event, editor);
                }
            });

            view.on('keydown', (event: any, data: any) => {
                if (props.onKeydown) {
                    props.onKeydown(event, data, editor);
                }
            });

            view.on('clipboardInput', (event: any, data: { dataTransfer: any; content: any; }) => {
                const dataTransfer = data.dataTransfer;
                let content = dataTransfer.getData('text/html').replace(/<img[^>]*>/g, "");
                data.content = editor.data.htmlProcessor.toView(content);
                // view.scrollToTheSelection();
            }, { priority: 'high' });


            // The `onReady` callback should be fired once the `editor` property
            // can be reached from the `<CKEditor>` component.
            // Ideally this part should be moved to the watchdog item creator listeners.

            setTimeout(() => {
                if (props.onReady) {
                    props.onReady(editor);
                }
            }, 300);


        });


        return () => {
            // Clean up the subscription
            if (instance.current) {
                instance.current.destroy();
            }

        };

    }, [loading]);


    if (loading) return null;


    return <div className={props.className} ref={root}></div>;


}

export default Editor;
export { Editor };