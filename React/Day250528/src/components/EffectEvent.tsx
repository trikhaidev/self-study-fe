import { useEffect, useEffectEvent, useState } from "react";

export default function EffectEvent(){
    const [text,setText] = useState('');
    const [warning,setWarning] = useState(false);

    const showLog = useEffectEvent(() => {
        return warning;
    });

    /**
     *  useEffectEvent hoàn toàn có thể trả về một giá trị
     */

    useEffect(() => {
        const type = showLog();
        if(type){
            console.warn('Text changed:', text);
        }
        else {
            console.log('Text changed:', text);
        }
    },[text]);

    return (
        <>
            <h1>{text}</h1>
            <div>
                <label>Input Text: </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div>
                <label>Warning: 
                    <input type="checkbox" checked={warning} onChange={(e) => setWarning(e.target.checked)} />
                </label>
            </div>
        </>
    );
}