import type React from "react";

type FormProps = {
    border:boolean
    children:React.ReactNode;
}
export default function Form({children,border}:FormProps){
    if(border){
        return (
            <div style={{
                border: '2px solid darkgreen'
            }}>
                {children}
            </div>
        );
    }
    return (
        <form>
            {children}
        </form>
    );
}