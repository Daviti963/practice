import { useState, useEffect } from "react";

export default function useDebounce<T>(value: T, delay: number): T {
    // 1. შევქმნათ State დაყოვნებული მნიშვნელობის შესანახად
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
     
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);


        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
}