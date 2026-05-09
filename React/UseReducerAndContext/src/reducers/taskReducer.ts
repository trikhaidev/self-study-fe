import type { TaskModel } from "../contexts/TaskItemsContext";

export interface TaskReducerAction{
    type:string;
    add?: {
        title:string;
    },
    deleteTaskId?:number,
    taskChange?:TaskModel,
}
export function taskReducer(tasks:TaskModel[], action:TaskReducerAction):TaskModel[]{
    if(action.type === 'add'){
        let maxId = 0;
        if(tasks && tasks.length > 0){
            maxId = tasks.reduce((prev,curr) => curr > prev ? prev : curr)?.id ?? 0
        }
        maxId = maxId + 1;
        return [
            ...tasks,
            {
                id: maxId,
                title: action.add!.title,
                done:false,
            }
        ];
    }
    else if(action.type === 'change'){
        return tasks.map(x => x.id !== action.taskChange!.id ? x : action.taskChange!);
    }
    else if(action.type === 'delete'){
        return tasks.filter(x => x.id !== action.deleteTaskId!);
    }
    throw new Error("Lỗi không xác định action type");
}