import { useReducer } from "react";
import { FormReducer, type FormModel } from "../models/FormModel";

export default function Form() {
    const [form, dispatch] = useReducer(FormReducer, {
        firstName: '',
        lastName: '',
        email: ''
    });
    function handleEditForm(next: FormModel) {
        dispatch({
            type: 'edit',
            newFromModel: next
        });
    }
    return (
        <>
            <div>
                <label>First Name: </label>
                <input type="text" value={form.firstName} onChange={(e) => {
                    handleEditForm({
                        ...form,
                        firstName: e.currentTarget.value
                    });
                }}></input>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={form.lastName} onChange={e => {
                    handleEditForm({
                        ...form,
                        lastName: e.currentTarget.value
                    });
                }}></input>
            </div>
            <div>
                <label>Email: </label>
                <input type="email" value={form.email} onChange={e => {
                    handleEditForm({
                        ...form,
                        email: e.currentTarget.value
                    });
                }}></input>
            </div>
            <div>
                <button onClick={() => {
                    dispatch({
                        type: 'reset'
                    });
                }}>Reset</button>
            </div>
            {
                (form.firstName || form.lastName || form.email) &&
                <div>
                    Your information: {form.firstName} - {form.lastName} - {form.email}
                </div>
            }
        </>
    );
}