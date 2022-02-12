import mitt from 'mitt';
import { useEffect } from 'react';

const emitter = mitt();

export const useBus = (type: string, callback: any, deps: any[]) => {
    useEffect(() => {
        emitter.on(type, callback)
        return () => {
            emitter.off(type, callback)
        }
    }, deps)
}

export const emit = (type: string, data: any) => emitter.emit(type, data)

export default useBus;
