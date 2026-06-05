import { useContext } from "react";
import useMyCustomReducer from "../custom-reducer/useMyCustomReducer";
import { FormReducer, type FormModel } from "../models/FormModel";
import { FormContext, FormContextReducer } from "../contexts/FormContext";


export default function Form() {
    const [form, dispatch] = useMyCustomReducer(FormReducer, {
        firstName: '',
        lastName: '',
        email: '',
        editCount: 0,
    });
    function handleEditForm(next: FormModel) {
        dispatch({
            type: 'edit',
            newFromModel: next
        });
    }
    return (
        <>
            <Div value={form.firstName} type="text" label="First name: " onChange={e => {
                handleEditForm({
                    ...form,
                    firstName: e.currentTarget.value
                });
            }}></Div>
            <Div value={form.lastName} type="text" label="Last name: " onChange={e => {
                handleEditForm({
                    ...form,
                    lastName: e.currentTarget.value
                });
            }}></Div>
            <Div value={form.email} type="email" label="Email: " onChange={e => {
                handleEditForm({
                    ...form,
                    email: e.currentTarget.value
                });
            }}></Div>
            <div>
                <button onClick={() => {
                    dispatch({
                        type: 'reset'
                    });
                }}>Reset</button>
                <p>Edit times: {form.editCount}</p>
            </div>
            <FormContext value={form}>
                <FormContextReducer value = {dispatch}>
                    <ShowFormInfo></ShowFormInfo>
                </FormContextReducer>
            </FormContext>
        </>
    );
}

type DivProps = {
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
};

function Div(p: DivProps) {
    return (
        <div>
            <label>{p.label}</label>
            <input type={p.type} value={p.value} onChange={p.onChange}></input>
        </div>
    );
}

function ShowFormInfo() {
    const form = useContext(FormContext);
    const formReducer = useContext(FormContextReducer);
    return (
        <>
            {
                form && (form.firstName || form.lastName || form.email) &&
                <div onClick = {() => {
                    if(!formReducer){
                        return;
                    }
                    formReducer({
                        type:'count'
                    });
                }}>
                    Your information: {form.firstName} - {form.lastName} - {form.email}
                </div>
            }
        </>
    );
}