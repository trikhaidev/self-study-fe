export type HelloWorldProps = {
    show:boolean
}
export default function HelloWorld(p:HelloWorldProps){
    if(p.show){
        return;
    }
    return (
        <h1>Hello world</h1>
    );
}