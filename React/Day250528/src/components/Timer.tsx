import { useEffect, useEffectEvent, useState } from "react";

export default function Timer(){
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(1);

    const onTick = useEffectEvent(() => {
        setCount(count + increment);
    });

    useEffect(() => {
        const id = setInterval(() => {
            // setCount(c => c + increment);
            onTick();
        },1000);
        return () => clearInterval(id);
    },[]);

    return (
        <>
            <h3>Count: {count}</h3>
            <button onClick={() => {
                setIncrement(increment == 1 ? 1 : increment - 1);
            }}>-</button>
            {increment}
            <button onClick={() => {
                setIncrement(increment + 1);
            }}>+</button>
        </>
    );
}