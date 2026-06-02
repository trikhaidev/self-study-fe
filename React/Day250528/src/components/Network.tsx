import { useEffect, useEffectEvent, useState } from "react";

export default function Network() {
    const [isOnline, setIsOnline] = useState(true);
    const [count, setCount] = useState(0);

    // const counting = useEffectEvent(() => {
    //     console.log("Counting...");
    //     if(isOnline) {
    //         setCount(count + 1);
    //     }
    // });

    useEffect(() => {
        function handleOnline() {
            setIsOnline(true);
        }
        function handleOffline() {
            setIsOnline(false);
        }
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        // const id = setInterval(() => {
        //     counting();
        // },1000);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
            // clearInterval(id);  
        };
    },[]);

    useEffect(() => {
        let id:number|null = null;
        if(isOnline){
            id = setInterval(() => {
                setCount(c => c + 1);
            },1000);
        }
        return () => {
            if(id){
                clearInterval(id);
            }
        }
    },[isOnline]);

    return (
        <>
            <h1
                style={{
                    color: isOnline ? 'green' : 'red'
                }}
            >{isOnline ? "Online" : "Offline"} - Count: {count}</h1>
        </>
    );
}