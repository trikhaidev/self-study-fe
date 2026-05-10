import { useContext, useState } from "react";
import type { TaskModel } from "../contexts/TaskItemsContext";
import { TaskDispatchContext } from "../contexts/TaskDispatchContext";

type TaskProps = {
    task: TaskModel,
}
export default function Task(p:TaskProps){
    const [editing, setEditing] = useState(false);
    const dispatch = useContext(TaskDispatchContext);
    if(!dispatch){
        throw new Error("Task: không tìm thấy dispatch");
    }
    return (
        <>
            {
                editing ? (
                    <div>
                        <input type="text" value={p.task.title} onChange={e => {
                            dispatch({
                                type:'change',
                                taskChange:{
                                    ...p.task,
                                    title:e.currentTarget.value
                                }
                            });
                        }}/>
                        <button onClick={() => {
                            if(!p.task.title){
                                alert('Title is empty');
                                return;
                            }
                            setEditing(!editing);
                        }}>Save</button>
                    </div>
                ) :
                (
                    <>
                        <div>
                            <label>
                                {p.task.done ?
                                    <del style={{color:'darkgreen'}}>{p.task.title}</del> :
                                    p.task.title
                                }
                            </label>
                            {' '}
                            <button onClick={() => {
                                dispatch({
                                    type:'change',
                                    taskChange:{
                                        ...p.task,
                                        done : !p.task.done,
                                    }
                                });
                            }}>{p.task.done ? 'Done' : 'Pending'}</button>
                            {' '}
                            <button onClick={() => setEditing(!editing)}>Edit</button>
                            {' '}
                            <button onClick={() => {
                                dispatch({
                                    type:'delete',
                                    deleteTaskId: p.task.id
                                });
                            }}>Delete</button>
                        </div>
                    </>
                )
            }
        </>
    );
}