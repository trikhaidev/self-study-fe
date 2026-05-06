import { useState } from "react";

type AddTaskProps = {
    onAddTask: (text:string) => void
}
export default function AddTask(p:AddTaskProps){
    const [text,setText] = useState<string>('');
    return (
        <>
            <input type="text" value={text} onChange={e => {
                setText(e.currentTarget.value);
            }}/>
            {' '}
            <button onClick={() => {
                setText('');
                p.onAddTask(text);
            }}>Add</button>
        </>
    );
}