import { useState } from "react";

export default function Count(){
    const [currCount,setCurrCount] = useState(0);
    return (
        <>
            <h1>{currCount}</h1>
            <button onClick={() => setCurrCount(currCount + 1)}>Next</button>
        </>
    );
}