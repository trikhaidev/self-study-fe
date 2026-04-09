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
    let content: React.ReactNode = null;
    if (type) {
        content = renderListItem(items,isOrderList);
    }
    else {
        content = <>
                {renderListItem(items.filter(x => x.isDone),isOrderList)}
                <hr/>
                {renderListItem(items.filter(x => !x.isDone),isOrderList)}
            </>
    }

    return (<>
        {content}
    </>);
}

function renderListItem(items: ToDoListItem[], isOrderList:boolean) {
    const TypeList = isOrderList ? "ol" : "ul";
    return (<TypeList className="space-y-3">
        {items.map(x => <li className="flex items-center justify-between text-gray-600" key={x.id}>
            <span className={x.isDone ? 'flex items-center gap-2' : ''}>
                {x.isDone ? <del className="text-gray-400">{x.title}</del> : x.title}
            </span>
            <Button isDone = {x.isDone} onClick={ () => {
                // e.stopPropagation();
                alert(`Bây giờ là ${new Date().toLocaleTimeString()}, bạn đã ${x.title} chưa ?`);
            }}>Click me</Button>
        </li>)
        }
    </TypeList>);
}