import { useState, useEffect } from 'react';

function usePersistedState(key: any, initialState: any) {
    const [state, setState] = useState<any>()

    useEffect(() => {
        const storageItem = localStorage.getItem(key);

        if (storageItem) {
            setState(JSON.parse(storageItem));
        } else {
            setState(initialState);
        };
    }, [])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state]);

    return [state, setState];
};

export default usePersistedState;
