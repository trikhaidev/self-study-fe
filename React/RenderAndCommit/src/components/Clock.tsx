type ClockProps = {
    time:string;
};
export default function Clock(p:ClockProps){
    return (
        <>
            <h1>Clock: {p.time}</h1>
            <input type="text"/>
        </>
    );
}