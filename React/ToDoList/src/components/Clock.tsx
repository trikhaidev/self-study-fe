import { useState } from "react";

export default function Clock(){
    const [timeString, setTimeString] = useState<string>(new Date().toLocaleTimeString());
    setInterval(() =>{
        setTimeString(new Date().toLocaleTimeString());
    }, 1000);
    return (
        <p>{timeString}</p>
    );
}