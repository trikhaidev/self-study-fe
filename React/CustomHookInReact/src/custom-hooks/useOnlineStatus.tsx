import { useEffect, useEffectEvent, useRef, useState } from "react";

export function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true);
    const [second, setSecond] = useState(0);
    const refCounter = useRef<null | (() => void)>(null);
    const onConnectedCount = useEffectEvent(() => {
        if (refCounter.current) {
            refCounter.current();
        }
        const id = setInterval(() => {
            setSecond(s => s + 1);
        }, 1000);
        return () => {
            setSecond(0);
            clearInterval(id);
        }
    });
    useEffect(() => {
        refCounter.current = onConnectedCount();
        function handleOnline() {
            setIsOnline(true);
            refCounter.current = onConnectedCount();
        }
        function handleOffline() {
            setIsOnline(false);
            if (refCounter.current) {
                refCounter.current();
            }
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }
    }, []);
    return {
        isOnline,
        connectedTime: second
    };
}

export function useOnlineStatus2() {
    const [isOnline, setIsOnline] = useState(true);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        function handleOnline(){
            setIsOnline(true);
        }
        function handleOffline(){
            setIsOnline(false);
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }
    },[]);

    useEffect(() => {
        let id:number;
        if(isOnline){
            id = setInterval(() => {
                setSecond(s => s + 1);
            },1000);
        }
        return () => {
            if(id){
                setSecond(0);
                clearInterval(id);
            }
        }
    },[isOnline]);

    return {
        isOnline,
        connectedTime: second
    }
}