import type React from "react";

type ListItemProps = {
    children:React.ReactNode;
}
export default function ListItem(p:ListItemProps){
    return (
        <li>
            {p.children}
        </li>
    );
}