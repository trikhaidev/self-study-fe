import { useState } from "react";

export default function useMyCustomReducer<m,a>(
    taskReducer:(curr:m,action:a) => m,
    init:m
): [m, (action:a)=>void]
{
    const [value,setValue] = useState(init);
    function dispatch(action:a){
        setValue(c => taskReducer(c,action));
    }
    return [value,dispatch];
}