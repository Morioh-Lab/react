# CKEditor wrapper for React


## Install

```
npm i @morioh/r-ckeditor
```


```js
import Editor from "@morioh/r-ckeditor";

 const config = {
        ...editorConfig,
        placeholder: "Write a comment",
        blockToolbar: []

    }

    const onChange = ({ html, text }) => {

        setDoc(prev => ({ ...prev, txt: html }));

    };

    const onKeydown = (evt, data, editor) => {
        const { keyCode, shiftKey } = data;

       
        if (keyCode === 13 && !shiftKey) {
            data.preventDefault();
            setSubmit(true);
            editor.setData('');
        }

    }

<Editor config={config} value={txt} onChange={onChange} onKeydown={onKeydown} className="border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 transition dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" />


```

## Props
```ts
/// <reference types="react" />
declare type EditorProps = {
    onChange: Function;
    onReady?: Function;
    onFocus?: Function;
    onBlur?: Function;
    onKeydown?: Function;
    value?: string | null;
    config?: any;
    disabled?: boolean;
    className?: string;
};
declare function Editor(props: EditorProps): JSX.Element | null;
export default Editor;
export { Editor };

```

