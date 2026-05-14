import type React from "react";
import { useState } from "react";

type FormProps = {
    border:boolean
    children:React.ReactNode;
}
export default function Form({children,border}:FormProps){
    const [size, setSize] = useState(0);
    if(border){
        return (
            <div style={{
                border: `${size}px solid darkgreen`,
                padding:size
            }}>
                <button onClick={() => setSize(size + 5)}>+</button>
                {children}
            </div>
        );
    }
    return (
        <form>
            <button onClick={() => setSize(size + 5)}>+</button>
            {children}
        </form>
    );
}