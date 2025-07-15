import { useState } from "react";

export function useLocalStorage(key, initialValue) {

    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            if (!item || item === undefined || item === 'undefined') {
                return initialValue;
            }
            return JSON.parse(item)
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    })
    
    const setValue = value => {
        try {
            const isInvalid = value === undefined || value === "undefined";
            const validValue = isInvalid ? initialValue : value;

            setStoredValue(validValue);
            window.localStorage.setItem(key, JSON.stringify(validValue))
        } catch (error) {
            console.error(error);
        }
    }

    return [storedValue, setValue];
}