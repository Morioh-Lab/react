

import { useState, Dispatch, useEffect, useCallback } from 'react';

export default function useStore<T>(key: string, initialValue?: T) {
    
    const readValue = (): T => {
        // Prevent build error "window is undefined" but keep keep working
        if (typeof window === 'undefined') {
            return initialValue!
        }

        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) as T : initialValue!
        } catch (error) {
            console.warn(`Error reading localStorage key “${key}”:`, error)
            return initialValue!
        }
    }

    const [value, setValue] = useState<T>(readValue);

    const handleStorage = useCallback((event) => {
        if (event.key === key && event.newValue !== value) {
            setValue(event.newValue || initialValue);
        }
    }, [value]);

    const setter: Dispatch<T> = (newValue: T) => {
        setValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue));
    }

    useEffect(() => {
        setValue(readValue());
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);

    }, [key]);

    return [value, setter] as const;

}