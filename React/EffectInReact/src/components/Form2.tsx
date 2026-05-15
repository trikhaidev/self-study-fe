import { useRef } from "react";

type Form2Props = {
    border:boolean
}
export default function Form2({border}:Form2Props){
    const ref = useRef<HTMLInputElement|null>(null);

    function handleClick(){
        ref.current?.focus();
    }

    if(border){
        return (
            <div style={{border:'2px solid black',padding:10}}>
                <button onClick={handleClick}>Focus</button>
                <input type="text" ref = {ref}/>
            </div>
        );
    }
    return(
        <div>
            <button onClick={handleClick}>Focus</button>
            <input type="text" ref = {ref}/>
        </div>
    );
}