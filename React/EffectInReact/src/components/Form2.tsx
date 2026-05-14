type Form2Props = {
    border:boolean
}
export default function Form2({border}:Form2Props){
    if(border){
        return (
            <div style={{border:'2px solid black',padding:10}}>
                <input type="text" />
            </div>
        );
    }
    return(
        <div>
            <input type="text" />
        </div>
    );
}