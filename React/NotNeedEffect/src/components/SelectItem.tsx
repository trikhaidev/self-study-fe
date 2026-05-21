import React, { useRef, useState } from "react";

type SelectItemProps = {
    children:React.ReactNode
}
export default function SelectItem({children}:SelectItemProps){
    const [text,setText] = useState('');
    const [items, setItems] = useState<string[]>([]);
    return (
        <div style={{
            border: '1px solid black',
            padding : 15,
            marginTop: 15
        }}>
            <h1>{children}</h1>
            <input type="text" value={text} onChange={e => setText(e.currentTarget.value)}/>
            <button onClick={() => setItems([...items,text])}>Add</button>
            <ShowItem items={items} key = {items.length}></ShowItem>
        </div>
    );
}

type ShowItemProps = {
    items:string[]
}
function ShowItem({items}:ShowItemProps){
    const [select,setSelect] = useState(0);
    // const prevItems = useRef(items);
    // if(prevItems.current !== items){
    //     prevItems.current = items;
    //     setSelect(0);
    // } không thể truy cập ref trong quá trình reder ?

    // const [prevItems, setPrevItems] = useState(items);
    // if(prevItems !== items){
    //     setSelect(0);
    //     setPrevItems(items);
    // } Cách này cũng không phải là tối ưu nhất. Cách tôi ưu nhất là truyền Key khi gọi ShowItem

    return (
        <>
            <ul>
                {
                    items.map((x,i) => <li key={i}><button onClick={() => setSelect(i)}>{x}</button></li>)
                }
            </ul>
            <h2>Chose: {items[select]}</h2>
        </>
    );
}

