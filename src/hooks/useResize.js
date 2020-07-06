import { useState, useEffect } from 'react';

function debounce(fn, ms) {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, arguments);
        }, ms);
    };
}

const useResize = () => {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });
    useEffect(() => {
        const debounceHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerWidth,
                width: window.innerWidth
            });
        }, 500);
        
        window.addEventListener("resize", debounceHandleResize);
        return () => window.removeEventListener("resize", debounceHandleResize);
    });
    return dimensions
};

export default useResize;