import type React from "react"
import { useMemo, useState } from "react";

type NumbersProps = {
    children: React.ReactNode
}
export default function Numbers({children}: NumbersProps) {
    const [odd, setOdd] = useState(false);
    const [number,setNumber] = useState(0);
    const [numbers, setNumbers] = useState([1,2,3]);
    function handleAddNumber(){
        setNumbers(
            [
                ...numbers,
                number
            ]
        );
    }
    return (
        <div style={{
            border: '1px solid black',
            padding : 15,
            marginTop: 15
        }}>
            <h1>{children}</h1>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.currentTarget.value))}/> 
            <button onClick={handleAddNumber}>Add</button>
            <br />
            <p>
                <button onClick={() => setOdd(!odd)}>{odd ? 'Lẻ' : 'Chẵn'}</button>
                {' '}
                <Sum numbers={numbers} odd={odd}></Sum>
            </p>
            <ShowListNumber numbers={numbers}></ShowListNumber>
        </div>
    );
}

type ShowNumberListProps = {
    numbers:number[],
    odd:boolean
}
function Sum({numbers,odd}:ShowNumberListProps){
    console.log('Render Sum component');

    const total = useMemo(() => {
        console.log(`Tính tổng số ${odd ? 'lẻ' : 'chẵn'}`);

        return numbers.filter(n => {
            if(odd){
                return n % 2 !== 0;
            }
            return n % 2 === 0;
        }).reduce((prev, curr) => {
            return prev + curr;
        },0);

    },[numbers,odd]);

    /**
     * useMemo sẽ lưu trữ lại kết quả tính toán trước đó. Ở lần render tiếp theo, nếu numbers và odd không thay đổi thì useMemo sẽ không
     * thực hiện tính toán lại mà sẽ trả về kết quả tính toán trước đó. useMemo chỉ thực hiện lại khi numbers hoặc odd thay đổi.
     * 
     * Lưu ý: useMemo không giúp cho function tính sum nhanh hơn, nó chỉ giúp bỏ qua việc tính toán không cần thiết.
     */

    return (
        <>Tổng: {total}</>
    );
}

type ShowListNumberProps = {
    numbers:number[]
}
function ShowListNumber({numbers}:ShowListNumberProps){
    return (
        <ul>
            {
                numbers.map((n,i) => <li key={i}>{n}</li>)
            }
        </ul>
    );
}