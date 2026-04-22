import { useState } from "react";
import type FormModel from "../models/FormModel";

let nextId = 0;
export default function FormUseState() {
    const [form,setForm] = useState<FormModel>({
        id: 0,
        title:'',
        done:false,
        createdAt : ''
    });
    const [formList, setFormList] = useState<FormModel[]>([]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        e.stopPropagation();
        setFormList(curr => {
            // alert('adding form to list');
            return [
                ...curr,
                {
                    ...form,
                    id: nextId++,
                    createdAt : new Date().toLocaleTimeString()
                }
            ];
        });
        // alert('function finished');
    }

    console.log(formList);

    return (
        <>
            <h1>UseState</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={form.title}
                    onChange={e => {
                        setForm({
                            ...form,
                            title: e.currentTarget.value,
                        });
                    }}
                />
                <br />
                <input 
                    type="checkbox" 
                    id="doneCheckbox"
                    name="done" 
                    checked={form.done}
                    onChange={e => {
                    setForm({
                        ...form,
                        done: e.currentTarget.checked
                    }); 
                    }} 
                    />
                <label htmlFor="doneCheckbox">
                    Done
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            <div style={
                {
                    border: '1px solid black',
                    padding: 20,
                    width:500
                }
            }>
                <h3>History: </h3>
                <ol>
                    {
                        formList.map(x => (
                            <li 
                                key={x.id}
                                style={{
                                    color: x.done ? 'darkgreen' : 'orange'
                                }}
                            >
                                    {
                                        x.done ? 
                                        <del>{x.title}</del> 
                                        :
                                        x.title
                                    }
                                    {` - ${x.createdAt}`}
                                    <button onClick={() =>{
                                        setFormList(formList.map(f => (
                                            f.id !== x.id ? f : {
                                                ...f,
                                                done: !f.done
                                            }
                                        )));
                                    }}>Toggle</button>
                                    <button onClick = {() => {
                                        setFormList(formList.filter(f => f.id !== x.id));
                                    }}>Delete</button>
                            </li>
                        ))
                    }
                </ol>
            </div>
        </>
    );
}