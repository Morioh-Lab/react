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
