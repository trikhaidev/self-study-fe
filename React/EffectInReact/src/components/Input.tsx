// import { useReducer, useState } from "react";

import { useReducer } from "react";

export default function Input(){
    // const [count, setCount] = useState(0);
    // const [text,setText] = useState('');
    const [text, dispath] = useReducer(textReducer,'');
    console.log("Input render");
    // setCount(count + 1); không thể setState khi render component

    // function myMethod(){
    //     setCount(count + 1);
    // }

    // myMethod();
    return (
        <input type="text" value={text} onChange={e => {
            dispath({
                type:'update',
                newValue:e.currentTarget.value
            });
        }}/>
    );
}
type TextReducerAction = {
    type:string,
    newValue?:string
}
function textReducer(currentText:string, action:TextReducerAction){
    if(action.type === 'update'){
        return action.newValue!;
    }
    throw Error('Unknown action');
}