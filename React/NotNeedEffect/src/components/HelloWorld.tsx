import { useState } from "react";

let name = 'kai';
export default function HelloWorld(){
    const [text, setText] = useState('');

    function handleChange(e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>){
        setText(e.currentTarget.value);
        name = e.currentTarget.value;
    }

    return (
        <>
            Hello world! I am {name}
            <input type="text" value={text} onChange={handleChange}/>
        </>
    );
}