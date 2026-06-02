import { useEffect, useEffectEvent, useState } from "react";

export default function Network() {
    const [isOnline, setIsOnline] = useState(true);
    const [count, setCount] = useState(0);

    const counting = useEffectEvent(() => {
        console.log("Counting...");
        if(isOnline) {
            setCount(count + 1);
        }
    });

    useEffect(() => {
        function handleOnline() {
            setIsOnline(true);
        }
        function handleOffline() {
            setIsOnline(false);
        }
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        const id = setInterval(() => {
            counting();
        },1000);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
            clearInterval(id);  
        };
    });
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