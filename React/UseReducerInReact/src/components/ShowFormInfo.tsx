import { useContext } from "react";
import { FormContext, FormContextReducer } from "../contexts/FormContext";
import type { FormAction, FormModel } from "../models/FormModel";

export default function ShowFormInfo() {
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

export type ShowFormInfoProps = {
    children:React.ReactNode;
    formContextValue:FormModel;
    formContextReducerValue:(action:FormAction) => void;
}
export function ShowFormInfoProvider({children, formContextValue, formContextReducerValue}:ShowFormInfoProps){
    return (
        <FormContext value = {formContextValue}>
            <FormContextReducer value = {formContextReducerValue}>
                {children}
            </FormContextReducer>
        </FormContext>
    )
}