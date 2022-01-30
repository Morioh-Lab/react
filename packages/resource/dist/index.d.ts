declare type ResourceProps = {
    tag: string;
    id: string;
    [key: string]: any;
};
declare function useResource(urls: Array<ResourceProps>): [boolean, ErrorEvent];
export default useResource;
export { useResource };
