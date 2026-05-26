import { useEffect, useEffectEvent, useState } from "react";

export default function TypeSomeThing(){
    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");

    const showNumberOdd = useEffectEvent(() => {
        alert("Số lẻ: "+number);
    });

    // function showNumberOdd(){
    //     alert("Số lẻ: "+number);
    // }

    useEffect(() => {
        if(number % 2 !== 0){
            showNumberOdd();
        }
    },[number]);

    return (
        <div>
            <div>
                <input type="text" value={text} onChange={e => setText(e.currentTarget.value)} />   
            </div>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.currentTarget.value))} />
            {
                number % 2 === 0 && <h2>Số chẵn</h2>
            }
        </div>
    );
}