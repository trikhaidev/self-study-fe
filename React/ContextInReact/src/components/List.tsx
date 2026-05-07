import type React from "react";

type UProps = {
    type:string,
    children:React.ReactNode,
}
export default function List(p:UProps){
    const ListType = p.type === 'ul' ? 'ul' : 'ol'
    return (
        <ListType>
            {
                p.children
            }
        </ListType>
    );
}