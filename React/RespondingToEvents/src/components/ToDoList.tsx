import ListItem,{ type ToDoListItem } from "./ListItem";

export type ToDoListProps = {
    subject: string;
    items: ToDoListItem[];
    type: boolean;
    isOrderList:boolean;
}

export default function ToDoList(p:ToDoListProps){
    return (
        <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{p.subject}</h2>
            <ListItem items={p.items} isOrderList={p.isOrderList} type = {p.type}></ListItem>
        </div>
    );
}
