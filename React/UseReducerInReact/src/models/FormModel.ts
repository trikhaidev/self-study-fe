export interface FormModel {
    firstName: string;
    lastName: string;
    email: string;
    editCount:number;
}
export type FormAction ={
    type:string;
    newFromModel?:FormModel;
}
export function FormReducer(model:FormModel,action:FormAction):FormModel{
    if(action.type === 'edit'){
        return {
            ...action.newFromModel!,
            editCount:model.editCount + 1,
        }
    }
    else if(action.type === 'reset'){
        return {
            firstName: '',
            lastName: '',
            email: '',
            editCount:model.editCount + 1,
        }
    }
    throw new Error('unknown action type');
}