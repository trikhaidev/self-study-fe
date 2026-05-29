import { useMemo, useState } from "react";

export default function Memo(){
    const [text, setText] = useState('');
    const [number, setNumber] = useState(0);
    const numberIs = useMemo(() => {
        return number % 2 === 0 ? 'Chẵn' : 'Lẻ';
    },[number]);
    return (
        <>
            <div>
                <label>Text: </label>
                <input type="text" value={text} onChange={e => setText(e.currentTarget.value)}/>
            </div>
            <div>
                <label>Number: </label>
                <input type="number" value={number} onChange={e => setNumber(parseInt(e.currentTarget.value))}/>
            </div>
            <h3>Number is {numberIs}</h3>
        </>
    );
}