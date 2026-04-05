import type React from "react";
import "./ToDoList.css"

export type ToDoListProps = {
    title:string,
    children:React.ReactNode,
};
export default function ToDoList(p:ToDoListProps){
    return (
        <div id="toDoList">
            <h1>{p.title}</h1>
            {p.children}
        </div>
    );
}
