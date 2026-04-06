let count = 0;
export default function SayHello(){
    nextCount();
    return (
        <>
            <h1>Hello world {count} - {new Date().toLocaleTimeString()}</h1>
            <hr />
            <SomeThing n = {1}></SomeThing>
            <SomeThing n = {2}></SomeThing>
            <SomeThing n = {3}></SomeThing>
        </>
    );
}
function nextCount(){
    count = count + 1;
}
type SomeThingProps = {
    n:number
}
function SomeThing(p :SomeThingProps){
    return <p>
        {p.n}
    </p>
}