import type React from "react";
import { useContext, useState } from "react";
import { LevelContext } from "../contexts/LevelContext";
import { ListTypeContext } from "../contexts/ListTypeContext";

type ListProps = {
    children:React.ReactNode,
}
export default function List(p:ListProps){
    const level = useContext(LevelContext);
    const listType = useContext(ListTypeContext);
    const [select, setSelect] = useState('');
    let TagName:'ul'|'ol';
    function handleChange(e:React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>){
        setSelect(e.currentTarget.value);
    }

    const content = (
        <LevelContext value={level+1}>
            <ListTypeContext value = {!listType}>
                {
                    p.children
                }
            </ListTypeContext>
        </LevelContext>
    );

    if(select){
        TagName = select == 'ul' ? 'ul' : 'ol';
        return (
            <TagName>
                <select value={select} onChange={handleChange}>
                    <option value= ''>Default</option>
                    <option value ='ul'>UL</option>
                    <option value= 'ol'>OL</option>
                </select>
                {content}
            </TagName>
        );
    }

    TagName = listType ? 'ul' : 'ol';
    
    return (
        <TagName>
            <select value={select} onChange={handleChange}>
                <option value= ''>Default</option>
                <option value ='ul'>UL</option>
                <option value= 'ol'>OL</option>
            </select>
            {content}
        </TagName>
    );
}