type InputProps = {
    number:number;
}
export default function Input(p:InputProps){
    const width = `${p.number}px`;
    console.log("Input width: " + width);
    // if(p.number % 2 !== 0){
    //     console.log("Odd");
    //     return <h1>Odd number: {p.number}</h1>;
    // }
    return (
        <>  
            <h1>{width}</h1>
            <input id="myInput" type="text" style={{
                width: width
            }}/>
        </>
    );
}

setInterval(() =>{
    const input = document.getElementById('myInput') as HTMLInputElement;
    console.warn(input?.value);
},1000);