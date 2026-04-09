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
                <hr />
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
            <button
                className={x.isDone ? `px-5 py-2 rounded-lg bg-blue-600 text-white font-medium
                        hover:bg-blue-700 active:bg-blue-800
                        focus:outline-none focus:ring-2 focus:ring-blue-400`
                    : `px-5 py-2 rounded-lg bg-red-600 text-white font-medium
                    hover:bg-red-700 active:bg-red-800
                    focus:outline-none focus:ring-2 focus:ring-red-400`}
                    onClick={() => {alert('mày click gì đấy ?')}}>
                {x.isDone ? 'Hoàn thành' : 'Chưa hoàn thành'}
            </button>
        </li>)
        }
    </TypeList>);
}