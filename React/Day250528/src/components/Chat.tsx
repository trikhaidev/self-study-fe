import { useEffect, useEffectEvent, useState } from "react";

export default function Chat(){
    const [text, setText] = useState('');
    const [delay, setDelay] = useState(1000);
    useTimer((count:number) => {
        console.log(`${text} - ${count}`)
    },delay);
    return (
        <>
            <div>
                <label>Text: </label>
                <input type="text" value={text} onChange={e => setText(e.currentTarget.value)}/>
            </div>
            <div>
                <label>Delay: </label>
                <input type="number" value={delay} onChange={e => setDelay(parseInt(e.currentTarget.value))}/>
            </div>
        </>
    );
}

function useTimer(callback:(count:number) => void, delay:number) {
    const onCallBackEvent = useEffectEvent((count:number) => {
        callback(count);
    });

    useEffect(() => {
        let count = 0;
        console.warn('Set interval');
        const id = setInterval(() => {
            onCallBackEvent(count++);
        },delay);
        return () => {
            console.error("Clear Interval");
            clearInterval(id);
        }
    },[delay]);
}