import {  useRef } from 'react';


const useThrottle = (fn, delay) => {
    const waitRef = useRef(false);
    return () => {
        if(waitRef.current) {
            return;
        }
        fn();
        waitRef.current = true;
        setTimeout(() => {
            waitRef.current = false;
        }, delay);
    }
}

export default useThrottle;