import type React from "react";
import { useContext } from "react";
import { LevelContext } from "../contexts/LevelContext";

type HeadingProps = {
    children: React.ReactNode,
};
export default function Heading(p: HeadingProps) {
    const level = useContext(LevelContext);
    if(level === 1){
        return <h1>{p.children}</h1>
    }
    else if(level === 2){
        return <h2>{p.children}</h2>
    }
    else if(level === 3){
        return <h3>{p.children}</h3>
    }
    else if(level === 4){
        return <h4>{p.children}</h4>
    }
    else if(level === 5){
        return <h5>{p.children}</h5>
    }
    else if(level === 6){
        return <h6>{p.children}</h6>
    }
    return <p>{p.children}</p>
}