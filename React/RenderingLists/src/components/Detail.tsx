import type React from "react";

export type DetailProps = {
    items: DetailItem[];
};
export interface DetailItem{
    content:string,
    done: boolean
}

export default function Detail(p:DetailProps){
    // const content:React.ReactNode = p.items.map(i => {
    //     if(i.done){
    //         return <li style={{color:"green"}} key={`${i.content}_${i.done}`}>
    //             <del>{i.content} - Done</del>
    //         </li>;
    //     }
    //     return (
    //         <li style={{color: 'red'}} key={`${i.content}_${i.done}`}>
    //             {i.content} - Not Done
    //         </li>
    //     );
    // });
    return (
        <ul>
            {renderItems(p.items)}
        </ul>
    );
}
function renderItems(items: DetailItem[]){
    return items.map(i => {
        if(i.done){
            return <li style={{color:"green"}} key={`${i.content}_${i.done}`}>
                <del>{i.content} - Done</del>
            </li>;
        }
        return (
            <li style={{color: 'red'}} key={`${i.content}_${i.done}`}>
                {i.content} - Not Done
            </li>
        );
    });
}