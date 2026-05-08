import type React from "react";
import { useContext } from "react";
import { LevelContext } from "../contexts/LevelContext";
import { ListTypeContext } from "../contexts/ListTypeContext";

type ListProps = {
    children:React.ReactNode,
}
export default function List(p:ListProps){
    const level = useContext(LevelContext);
    const ListType = useContext(ListTypeContext);
    const TagName = ListType ? 'ul' : 'ol'
    return (
        <TagName>
            <ListTypeContext value={!ListType}>
                <LevelContext value={level + 1}>
                    {
                        p.children
                    }
                </LevelContext>
            </ListTypeContext>
        </TagName>
    );
}