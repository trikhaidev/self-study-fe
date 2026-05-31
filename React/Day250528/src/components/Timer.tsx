import { useContext, useEffect, useEffectEvent, useState } from "react";
import { InCrementContext } from "../contexts/IncrementContext";

export default function     Timer(){
    const [count, setCount] = useState(0);
    const initIncrement = useContext(InCrementContext);
    const [increment, setIncrement] = useState(initIncrement);

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