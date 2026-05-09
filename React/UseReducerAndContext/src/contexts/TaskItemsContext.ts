import { createContext } from "react";

export interface TaskModel{
    id:number,
    title:string,
    done:boolean
}
export const TaskItemsContext = createContext<TaskModel[]>(
    [
        {
            id: 1,
            title:"Công việc 1",
            done:false
        },
        {
            id: 2,
            title:"Công việc số hai",
            done:true,
        }
    ]
);