import { Dispatch } from 'react';
export default function useStore<T>(key: string, initialValue?: T): readonly [T, Dispatch<T>];
