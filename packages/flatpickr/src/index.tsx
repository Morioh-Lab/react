import { useEffect, useRef } from "react";
import useResource from "@morioh/r-resource";

declare const window: any;

type PlatpickrProps = {
    config?: any,
    onChange?: any,
    onOpen?: any,
    onClose?: any,
    onMonthChange?: any,
    onYearChange?: any,
    onReady?: any,
    onValueUpdate?: any,
    onDayCreate?: any,
    onCreate?: any,
    onDestroy?: any,
    value?: string | any | object | number,
    className?: string
}


export default function Flatpickr(props: PlatpickrProps): JSX.Element | null {

    const hooks = ['onChange', 'onOpen', 'onClose', 'onMonthChange', 'onYearChange', 'onReady', 'onValueUpdate', 'onDayCreate'];

    const root = useRef(null);
    const instance = useRef<any>();

    const [loading] = useResource([

        {
            tag: 'link',
            id: 'flatpickr-css',
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.9/flatpickr.min.css',
        },
        {
            tag: 'script',
            id: 'flatpickr-js',
            src: 'https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.9/flatpickr.min.js'
        }
    ]);


    useEffect(() => {

        if (loading) return;

        const config = {
            dateFormat: 'U',
            altFormat: 'Y-m-d G:i K',
            altInput: true,
            enableTime: true,
            minDate: new Date(),
            ...props.config,
            defaultDate: props.config?.defaultDate || props.value || null
        };

        hooks.forEach(hook => {
            if (props.hasOwnProperty(hook)) {
                config[hook] = props[hook]
            }
        })

        instance.current = window.flatpickr(root.current, config);


        return () => {
            // Clean up the subscription
            if (instance.current) {
                instance.current.destroy();
                instance.current = null;
            }

        };

    }, [loading]);


    if (loading) return null;


    return <input type="text" ref={root} {...props} />;


}