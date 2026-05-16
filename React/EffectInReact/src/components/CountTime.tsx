import { useEffect, useState } from "react";

export default function CountTime(){
    const [second,setSecond] = useState(0);

    useEffect(() => {
        console.log('set time');
        const id = setInterval(() => {
            setSecond(s => s + 1);
        }, 1000);  
        // console.log(second);
        return () => {
            console.log("Clear interval");
            clearInterval(id);
        }      
    },[]);
    
    return (
        <>
            <p>Second: {second}</p>
            <input type="text" />
        </>
    );
}
/**
 * Các setState được trả về bởi useState cũng có định danh ổn định, vì vậy bạn thường thấy chúng bị loại bỏ khỏi các phần phụ thuộc. 
 * => Nếu trình kiểm tra cú pháp cho phép bạn loại bỏ một phần phụ thuộc mà không báo lỗi, thì việc đó là an toàn.
 * 
 * React sẽ gọi hàm dọn dẹp của bạn trước khi Effect chạy lần tiếp theo và trong quá trình hủy bỏ component.
 */