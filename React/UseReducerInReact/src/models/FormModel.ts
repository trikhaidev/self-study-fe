export interface FormModel {
    firstName: string;
    lastName: string;
    email: string;
}
export type FormAction ={
    type:string;
    newFromModel?:FormModel;
}
export function FormReducer(model:FormModel,action:FormAction):FormModel{
    if(action.type === 'edit'){
        return {
            ...action.newFromModel!
        }
    }
    else if(action.type === 'reset'){
        return {
            firstName: '',
            lastName: '',
            email: ''
        }
    }
    throw new Error('unknown action type');
}