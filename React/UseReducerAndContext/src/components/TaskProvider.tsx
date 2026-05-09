import React, { useContext, useReducer } from "react";
import { TaskItemsContext } from "../contexts/TaskItemsContext";
import { taskReducer } from "../reducers/taskReducer";
import { TaskDispatchContext } from "../contexts/TaskDispatchContext";

type TaskProviderProps = {
    children:React.ReactNode
}
export default function TaskProvider(p:TaskProviderProps) {
    const initTasks = useContext(TaskItemsContext);
    const [tasks, dispatch] = useReducer(taskReducer,initTasks);
    return (
        <>
            <TaskDispatchContext value={dispatch}>
                <TaskItemsContext value={tasks}>
                    {p.children}
                </TaskItemsContext>
            </TaskDispatchContext>
        </>
    );
}