import { useRef, useState, useEffect } from "react";

const useHover = () => {
    
    const ref = useRef(false);

    const [ hovered, setHovered] = useState(false);

    const enter = () => {
        setHovered(true);
    }

    const leave = () => {
        setHovered(false);
    }

    useEffect(() => {
        const refCopy = ref;
        refCopy.current.addEventListener('mouseenter', enter)

        refCopy.current.addEventListener('mouseleave', leave)

        return () => {
            refCopy.current.removeEventListener('mouseenter', enter)
            refCopy.current.removeEventListener('mouseleave', leave)
        }
    })

    return [ref, hovered];
}

export default useHover;
