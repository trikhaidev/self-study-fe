import { useEffect, useState } from "react";

export default function Time(){
    const [timeString,setTimeString] = useState(new Date().toLocaleDateString());
    useEffect(() => {
        console.log('Time Started');
        const id = setInterval(() => {
            setTimeString(new Date().toLocaleTimeString())
        }, 1000);
        return () => {
            console.log('Time stoped')
            clearInterval(id);
        }
    },[]);
    return (
        <>
            <h2>Current Time: {timeString}</h2>
        </>
    );
}