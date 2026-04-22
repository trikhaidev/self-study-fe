import { useImmer } from "use-immer";
import type FormModel from "../models/FormModel";

let nextId = 0;
export default function FormUseImmer() {
    const [form, updateForm] = useImmer<FormModel>({
        id: 0,
        title:'',
        done:false,
        createdAt : ''
    });
    const [formList, updateFormList] = useImmer<FormModel[]>([]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        e.stopPropagation();
        updateFormList(curr => {
            curr.push({
                ...form,
                id: nextId++,
                createdAt : new Date().toLocaleTimeString()
            });
        });
    }

    return (
        <>
            <h1>UseImmer</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={form.title}
                    onChange={e => {
                        const value = e.currentTarget.value;
                        updateForm(f => {
                            f.title = value;
                        });
                    }}
                />
                <br />
                <input 
                    type="checkbox" 
                    id="doneCheckboxUseImmer"
                    name="done" 
                    checked={form.done}
                    onChange={e => {
                        const checked = e.currentTarget.checked;
                        updateForm(f => {
                            f.done = checked;
                        });
                    }}
                    />
                <label htmlFor="doneCheckboxUseImmer">
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
                                        updateFormList(curr => {
                                            const data = curr.find(f => f.id === x.id);
                                            if(!data){
                                                return;
                                            }
                                            data.done = !data.done;
                                        });
                                    }}>Toggle</button>
                                    <button onClick = {() => {
                                        updateFormList(curr => {
                                            const index = curr.findIndex(f => f.id === x.id);
                                            curr.splice(index,1);
                                        });
                                    }}>Delete</button>
                            </li>
                        ))
                    }
                </ol>
            </div>
        </>
    );
}