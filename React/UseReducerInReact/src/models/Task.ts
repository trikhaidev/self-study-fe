export let lastId:number = 0;

export interface Task {
    id: number,
    content: string,
    isDone: boolean,
    isEditing:boolean
}

export interface TaskAction {
    type: string,
    newTask?: {
        content:string,
        isDone:boolean
    },
    removeId?:number,
    changeIsDone?:{
        id:number,
        isDone:boolean
    }
    toggleIsEditing?:number,
    changeContent?:{
        id:number,
        newContent:string,
    }
}

export function tasksReducer(taks: Task[], action: TaskAction):Task[] {
    if (action.type === 'add') {
        return [
            ...taks,
            {
                ...action.newTask!,
                id: ++lastId,
                isEditing:false,
            }
        ];
    }
    else if(action.type === 'remove'){
        return taks.filter(x => x.id !== action.removeId!);
    }
    else if(action.type === 'change_isDone'){
        return taks.map(x => x.id === action.changeIsDone!.id ? {
            ...x,
            isDone : action.changeIsDone!.isDone
        } : x);
    }
    else if(action.type === 'editing'){
        return taks.map(x => x.id === action.toggleIsEditing! ? {
            ...x,
            isEditing:!x.isEditing,
        }:x);
    }
    else if(action.type === 'change_content'){
        return taks.map(x => x.id === action.changeContent!.id ? 
            {
                ...x,
                content : action.changeContent!.newContent,                
            }
            :x
        )
    }
    throw new Error("");
}
