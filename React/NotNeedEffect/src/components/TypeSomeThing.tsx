import { useEffect, useEffectEvent, useState } from "react";

export default function TypeSomeThing(){
    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");

    const showNumberOdd = useEffectEvent(() => {
        alert("Số lẻ: "+number);
    });
    /**
     * Nên dùng cách này nếu function được sử dụng trong effect nhưng bạn lại không muốn khai báo nó trong mảng phụ thuộc.
     * 
     * Lưu ý: function sử dụng useEffectEvent này vẫn sẽ được định nghĩa lại sau mỗi lần render => nếu chày cối đưa nó vào mảng phụ thuộc thì Effect sẽ 
     * chạy lại sau mỗi lầnrender (do nó thấy function lần này khác với function của lần render trước đó)
     * 
     * Lưu ý: vì đã sử dụng useEffectEvent nên ta k cần phải khai báo nó trong mảng phụ thuộc nữa. Nếu vẫn chày cối khai báo nó trong mảng phụ thuộc
     * thì Effect vẫn sẽ chạy lại sau mỗi lần render.  Nói cách khác thì việc sử dụng useEffectEvent sẽ giống như việc bạn thông báo cho các Effect
     * đang dùng function này là "Bạn không muốn Effect chạy lại chỉ vì function này được định nghĩa lại sau mỗi lần render"
     */

    // function showNumberOdd(){
    //     alert("Số lẻ: "+number);
    // }
    /**
     *  Nếu dùng cách này thì phải khai báo phụ thuộc, nhưng vì mỗi lần redner là 1 lần định nghĩa lại function mới nên các phụ thuộc sẽ khác nhau sau
     * mỗi lần render, dẫn đến effect sẽ lại sau mỗi lần render
     */

    useEffect(() => {
        if(number % 2 !== 0){
            showNumberOdd();
        }
    },[number]);

    return (
        <div>
            <div>
                <input type="text" value={text} onChange={e => setText(e.currentTarget.value)} />   
            </div>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.currentTarget.value))} />
            {
                number % 2 === 0 && <h2>Số chẵn</h2>
            }
        </div>
    );
}