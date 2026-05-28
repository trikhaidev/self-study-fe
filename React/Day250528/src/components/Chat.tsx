import { useEffect, useEffectEvent, useState } from "react";

export default function Chat(){
    const [text, setText] = useState('');
    const [delay, setDelay] = useState(1000);
    useTimer((count:number) => {
        console.log(`${text} - ${count}`)
    },delay);
    return (
        <>
            <div>
                <label>Text: </label>
                <input type="text" value={text} onChange={e => setText(e.currentTarget.value)}/>
            </div>
            <div>
                <label>Delay: </label>
                <input type="number" value={delay} onChange={e => setDelay(parseInt(e.currentTarget.value))}/>
            </div>
        </>
    );
}

function useTimer(callback:(count:number) => void, delay:number) {
    const onCallBackEvent = useEffectEvent((count:number) => {
        callback(count);
    });
    /**
     * Ở đây, onCallBackEvent nó được gọi là Sự kiện Effect. Nó là một phần của logic Effect của bạn, nhưng nó hoạt động giống như một trình xử lý sự 
     * kiện hơn. Logic bên trong nó không mang tính phản ứng và nó luôn "nhìn thấy" các giá trị mới nhất của props và state của bạn.
     */

    /**
     *  Mặc dù mỗi khi useEffectEvent chạy sẽ tạo ra một function mới tuy nhiên các Effect cũ đang chạy mà có sử dụng onCallBackEvent thì vẫn sẽ nhận được
     * phiên bản onCallBackEvent mới.
     * 
     * Lưu ý: không cần phải khai báo onCallBackEvent trong mảng phụ thuộc vì khi bạn sử dụng useEffectEvent thì bạn đã thông báo cho react biết rằng
     * đoạn mã bên trong sẽ không cần chạy lại mỗi khi các biến phản ứng thay đổi.
     * 
     * => Để cho dễ hiểu thì bạn cứ xem effectEvent(onCallBackEvent) chính là trình xử lý xự kiện của Effect. Nó sẽ được Effect gọi khi cần thiết
     */

    useEffect(() => {
        let count = 0;
        console.warn('Set interval');
        const id = setInterval(() => {
            onCallBackEvent(count++); 
            // đây là sự kiện của Effect. Mặc dù đã được đắng kí từ Effect trước đó nhưng mỗi khi Effect trước đó gọi lại
            //onCallBackEvent thì nó luôn nhận được phiên bản mới nhất
        },delay);
        return () => {
            console.error("Clear Interval");
            clearInterval(id);
        }
    },[delay]); // => Effect chỉ chạy lại khi delay thay đổi
}