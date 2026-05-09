import { useContext, useState } from "react";
import { TaskDispatchContext } from "../contexts/TaskDispatchContext";

export default function AddTask(){
    const [text, setText] = useState("");
    const dispatch = useContext(TaskDispatchContext);
    if(!dispatch){
        throw new Error("AddTask: không tìm thấy dispatch");
    }
    return (
        <>
            <input type="text" value={text} onChange={e => {
                setText(e.currentTarget.value);
            }}/>
            <button onClick={() => {
                setText('');
                dispatch!({
                    type:'add',
                    add:{
                        title:text,
                    }
                });
            }}>Add</button>
        </>
    );
}