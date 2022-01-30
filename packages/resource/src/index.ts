import { useState, useEffect } from 'react';

type ResourceProps = {
    tag: string,
    id: string,
    [key: string]: any;
}

function useResource(urls: Array<ResourceProps>): [boolean, ErrorEvent] {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        // Nothing to do on server, or if no src specified, or
        // if loading has already resolved to "loaded" or "error" state.
        if (typeof window === 'undefined' || !urls || !loading || error) return;

        let promises: Array<Promise<HTMLElement>> = [];

        for (let i = 0; i < urls.length; i++) {
            const { tag, ...attrs } = urls[i];

            promises.push(new Promise((resolve, reject) => {

                let el: HTMLElement; el = attrs.id ? document.getElementById(attrs.id) : null;

                if (el) return resolve(el);

                el = document.createElement(tag);

                el.addEventListener('load', (ev) => {
                    resolve(el);
                });

                el.addEventListener('error', (err) => {
                    reject(err);
                });

                for (const key in attrs) {
                    el.setAttribute(key, attrs[key]);
                }

                document.head.appendChild(el);

            }))

        }

        return Promise.all(promises)
            .then(() => { setLoading(false); })
            .catch((e) => { setError(e); });

        // we need to ignore the attributes as they're a new object per call, so we'd never skip an effect call
    }, []);

    return [loading, error];

}

export default useResource;
export { useResource };