import copyToClipboard from 'copy-to-clipboard';
import { useCallback, useEffect, useState } from 'react';

export interface IClipboard {
    timeout: number;
    debug?: boolean;
    message?: string;
    format?: string; // MIME type
    onCopy?: (clipboardData: object) => void;
}

export default function useClipboard(config: IClipboard = { timeout: 3000 }): [boolean, (text: string) => void] {
    const [isCopied, setIsCopied] = useState(false);

    const toClipboard = useCallback(
        (text: string) => {
            setIsCopied(copyToClipboard(text, config));
        },
        [config]
    );

    useEffect(() => {
        if (isCopied) {
            const hide = setTimeout(() => {
                setIsCopied(false);
            }, config.timeout);

            return () => {
                clearTimeout(hide);
            };
        }
        return undefined;
    }, [isCopied, setIsCopied, config]);

    return [isCopied, toClipboard];
}
