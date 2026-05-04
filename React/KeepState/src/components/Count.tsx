import { useState } from "react";
type CountProps = {
check:boolean
};
export default function Count(p:CountProps){
    const [currCount,setCurrCount] = useState(0);
    if(p.check){
        return (
            <>
                <h1>{currCount}</h1>
                <h2>Check status: {p.check}</h2>
                <button onClick={() => setCurrCount(currCount + 1)}>Next</button>
            </>
        );
    }
    return (
        <>
            <h1>{currCount}</h1>
            <button onClick={() => setCurrCount(currCount + 1)}>Next</button>
        </>
    );
}