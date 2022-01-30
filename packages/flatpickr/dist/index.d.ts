/// <reference types="react" />
declare type PlatpickrProps = {
    config?: any;
    onChange?: any;
    onOpen?: any;
    onClose?: any;
    onMonthChange?: any;
    onYearChange?: any;
    onReady?: any;
    onValueUpdate?: any;
    onDayCreate?: any;
    onCreate?: any;
    onDestroy?: any;
    value?: string | any | object | number;
    className?: string;
};
export default function Flatpickr(props: PlatpickrProps): JSX.Element | null;
export {};
