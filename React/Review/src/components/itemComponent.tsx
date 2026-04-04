import type React from "react";

export type ItemProps = {
    content?: string,
    checked:boolean
};
export default function Item(p:ItemProps){
    if(!p.content){
        return (
            <li>
                What is it ? Bro ?
            </li>
        );
    }

    let content:React.ReactNode = p.content;
    if(p.checked){
        content = (
            <>
                {p.content} - <b>Checked</b>
            </>
        );
    }
    else{
        content = <del>
            {p.content} - <i>Unchecked</i>
        </del>;
    }
    return (
        <>
            <li style={{
                color: p.checked ? 'Green' : 'red'
            }}>
                {content}
            </li>
        </>
    );
}