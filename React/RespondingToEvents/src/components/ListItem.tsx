import { useState, type JSX } from "react";
import Button from "./Button";

export interface ToDoListItem {
    id: number;
    title: string;
    isDone: boolean;
}

type ToDoListItemProps = {
    type: boolean;
    isOrderList: boolean;
    items: ToDoListItem[];
}

export default function ListItem({ type, items, isOrderList }: ToDoListItemProps) {
    let content: JSX.Element | null = null; // nên dùng cách này nếu muốn ràng buộc chỉ nhận JSX
    //let content: React.ReactNode = null; // Cách 2
    if (type) {
        content = renderListItem(items, isOrderList);
    }
    else {
        content = <>
            {renderListItem(items.filter(x => x.isDone), isOrderList)}
            <hr />
            {renderListItem(items.filter(x => !x.isDone), isOrderList)}
        </>
    }
    return (
        <>
            {content}
        </>
    );
}

function renderListItem(items: ToDoListItem[], isOrderList: boolean) {
    const TypeList = isOrderList ? "ol" : "ul";
    return (<TypeList className="space-y-3">
        {items.map(x => {
            const [item,setItem] = useState(x);
            return <li className="flex items-center justify-between text-gray-600" key={x.id}>
                <span className={item.isDone ? 'flex items-center gap-2' : ''}>
                    {item.isDone ? <del className="text-gray-400">{item.title}</del> : item.title}
                </span>
                <Button isDone={item.isDone} onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    alert(`Bây giờ là ${new Date().toLocaleTimeString()}, bạn đã ${item.title} chưa ?`);
                    item.isDone = !item.isDone;
                    setItem(item); 
                }}>Click me</Button>
            </li>
        })
        }
    </TypeList>);
}