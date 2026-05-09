import { useContext } from "react";
import {TaskItemsContext} from "../contexts/TaskItemsContext";
import Task from "./Task";

export default function TaskList(){
    const tasks = useContext(TaskItemsContext);
    return (
        <>
            {
                tasks.map(x => (
                    <Task 
                        key={x.id}
                        task={x}
                    >
                    </Task>
                ))
            }
        </>
    );
}