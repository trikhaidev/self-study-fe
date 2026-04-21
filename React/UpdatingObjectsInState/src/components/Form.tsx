import { useImmer } from "use-immer";

type FormType = {
    firstName: string;
    LastName:string;
    age:string;
    submit:{
        history:string[];
        count:number;
    }
};
export default function Form(){
    const [form, updateForm] = useImmer<FormType>({
        firstName: "",
        LastName: "",
        age: '',
        submit:{
            history: [],
            count: 0,
        }
    });

    function updateFirstName(e:React.ChangeEvent<HTMLInputElement>){
        const newFirstName = e.currentTarget.value;
        updateForm(f => {
            f.firstName = newFirstName;
        });
    }

    function updateLastName(e:React.ChangeEvent<HTMLInputElement>){
        const newLastName = e.currentTarget.value;
        updateForm(f => {
            f.LastName = newLastName;
        });
    }

    function updateAge(e:React.ChangeEvent<HTMLInputElement>){
        // if(!e.currentTarget.value || e.currentTarget.value.trim() === ''){
        //     updateForm(f => {
        //         f.age = null;
        //     });
        //     return;
        // }
        // const newAge = parseInt(e.currentTarget.value);
        // updateForm(f => {
        //     f.age = newAge;
        // });
        const newAge = e.currentTarget.value;
        updateForm(f => {
            f.age = newAge;
        });
    }

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const message = `First Name: ${form.firstName}, Last Name: ${form.LastName}, Age: ${form.age}`; 
        alert(message);
        updateForm(f => {
            f.submit.count += 1;
            f.submit.history.push(message);
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={form.firstName} onChange={updateFirstName}/>
            <br />
            <input type="text" value={form.LastName} onChange={updateLastName}/>
            <br />
            <input type="number" value={form.age} onChange={updateAge}/>
            <br />
            <button type="submit">Submit</button>
            <hr />
            <h3>Submit count: {form.submit.count}</h3>
            <ul>
                {form.submit.history.map((h,index) => <li key={index}>Body: {h}</li>)}
            </ul>
        </form>
    );
}