type InputProps = {
    lable:string,
    value:string,
    onChange:(newValue:string)=>void
}
export default function Input(props:InputProps){
    return (
        <>
            <label>{props.lable}</label> {' '}
            <input value={props.value} onChange={e => {
                props.onChange(e.currentTarget.value);
            }}/>
        </>
    );
}