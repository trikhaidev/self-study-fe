type InputProps = {
    number:number;
}
export default function Input(p:InputProps){
    const width = `${p.number * 2}px`;
    console.log("Input width: " + width);
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