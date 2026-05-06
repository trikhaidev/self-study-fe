import type { Task } from "../models/Task"

type Tasks = {
    tasks:Task[],
    onRemove: (id:number) => void
    onChangeIsDone:(id:number,isDone:boolean) => void
    onEditing: (id:number) => void
    onChangeContent: (id:number,newContent:string) => void
}
export default function Tasks(p:Tasks){
    return (
        <>
            <ul>
                {
                    p.tasks.map(x => (
                        <li key={x.id}>
                            {
                                x.isEditing ? 
                                (
                                    <input type="text" value={x.content} onChange={e => {
                                        p.onChangeContent(x.id, e.currentTarget.value);
                                    }}/>
                                )
                                :
                                (x.isDone ? <del style={{color:'darkgreen'}}>{x.content}</del> : x.content)
                            }
                            {' '}
                            <label htmlFor={`t${x.id}`}>
                                <input id={`t${x.id}`} type="checkbox" checked={x.isDone} onChange={e => {
                                    p.onChangeIsDone(x.id,e.currentTarget.checked);
                                }}/>
                                {x.isDone ? 'Done' : 'Pending'}
                            </label>
                            {' '}
                            <button onClick={() => {
                                p.onEditing(x.id);
                            }}>{x.isEditing ? 'save' : 'edit'}</button>
                            {' '}
                            <button onClick={() => {
                                p.onRemove(x.id);
                            }}>Remove</button>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}