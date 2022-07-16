export interface IClipboard {
    timeout: number;
    debug?: boolean;
    message?: string;
    format?: string;
    onCopy?: (clipboardData: object) => void;
}
export default function useClipboard(config?: IClipboard): [boolean, (text: string) => void];
