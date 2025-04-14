import { useEffect, useRef } from "react"

export const useTimeout = (callback,delay) =>{
    const callbackRef = useRef(callback) 
    callbackRef.current = callback // referring to updated callback
    useEffect(()=>{
        const timerId = setTimeout(callbackRef.current,delay)
        return ()=>{
            clearTimeout(timerId)
        }
    },[delay])
}