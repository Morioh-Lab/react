# use Clipboard React Hooks


## Install

```
npm i @morioh/r-clipboard
```


```js
import useClipboard from "@morioh/r-clipboard";


export default function App() {

    const address = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';

    const [isCopied, toClipboard] = useClipboard();

    return (
        <div className="space-y-4 px-6 py-4">
            <div className="relative mt-1 flex rounded-md shadow-sm">
                <input
                    type="text"
                    readOnly
                    value={address}
                    className="block w-full rounded-md border-gray-300 p-2.5 text-sm text-gray-900 transition focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
                />

                <div className="absolute inset-y-0 right-1 flex items-center">
                    <button
                        type="button"
                        onClick={() => toClipboard(address)}
                        className="-ml-py inline-flex items-center rounded px-3 py-2 text-sm font-medium transition hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500">
                        {isCopied ? <MdCheck className="h-5 w-5"></MdCheck> : <MdContentCopy className="h-5 w-5"></MdContentCopy>}
                    </button>
                </div>
            </div>
        </div>
    );
}

```

## Props
```ts
/// <reference types="react" />
export interface IClipboard {
    timeout: number; // default 3000ms 
    debug?: boolean;
    message?: string;
    format?: string;
    onCopy?: (clipboardData: object) => void;
}
export default function useClipboard(config?: IClipboard): [boolean, (text: string) => void];

```

Contributing
------------

Please refer to each project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes

NOTE: Be sure to merge the latest from "upstream" before making a pull request!

Community
------------
Stay up to date on the development of Morioh UI and reach out to the community with these helpful resources.

Follow [@codek_tv](https://twitter.com/codek_tv) and [@im_a_developer](https://twitter.com/im_a_developer) on Twitter.

Follow [Morioh](https://www.facebook.com/moriohdotcom) and [React Developers](https://www.facebook.com/ReactDevelopersz/) on FaceBook.

Join the official [Discord](https://discord.gg/sqxU6un) room: [https://discord.gg/sqxU6un](https://discord.gg/sqxU6un).