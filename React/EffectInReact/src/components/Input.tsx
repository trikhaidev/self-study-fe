import { useState } from "react";

export default function Input(){
    const [count, setCount] = useState(0);
    const [text,setText] = useState('');
    console.log("Input render");
    // setCount(count + 1); không thể setState khi render component

    // function myMethod(){
    //     setCount(count + 1);
    // }

    // myMethod();
    return (
        <input type="text" value={text} onChange={e => setText(e.currentTarget.value)}/>
    );
}