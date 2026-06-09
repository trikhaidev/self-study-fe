import { useEffect, useRef, useState } from "react";

export default function useSomething({tang}:{tang:boolean}){
    const [count, setCount] = useState(0);
    useEffect(() => {
        if(tang){

            // function handleCount(){
            //     setCount(c => c + 1);
            // }
            // handleCount(); // nếu muốn đánh lừa trình kiểm tra thì dùng cách này

            // setCount(c => c + 1); 
            /**
             * Việc gọi và setState trực tiếp trong Effect như này là không nên, vì có thể gây ra vòng lặp render vô tận.
             * 
             * Effect chỉ chạy sau khi render xong (html đc commit ra DOM) => set lại state ngày sau khi render sẽ gây ra hiệu suất k tốt
             */
        }
    },[tang]);

    const refCount = useRef(0);
    useEffect(() => {
        if(tang){
            refCount.current += 1;
        }
    },[tang]);
    /**
     *  Bạn có thể nghĩ đến cách sử dụng ref thay cho state để tránh việc kích hoạt render lại. Tuy nhiên, React có một lưu ý quan trọng là: Không nên
     * truy cập hay thay đổi giá trị của ref (thuộc tính current) trong quá trình hiển thị (render)
     * 
     * Lưu ý: Kết luận trên về mặt cú pháp hay biên dịch hay trong lúc thực thi thì không hề có lỗi, đó chỉ là lời khuyên để việt code dễ bảo trì hơn.
     * Hãy luôn tuân thủ theo trình kiểm tra cú pháp. 
     * 
     * 
     *  Không nên đọc hoặc ghi dữ liệu ref.current trong quá trình render. Nếu cần thông tin nào đó trong quá trình render, hãy sử dụng state thay thế. 
     * Vì React không biết khi nào ref.currentref thay đổi, ngay cả việc đọc nó trong khi render cũng khiến hành vi của component khó dự đoán. 
     * (Ngoại lệ duy nhất là đoạn mã if (!ref.current) ref.current = new Thing()chỉ thiết lập ref một lần trong lần render đầu tiên.)
     */
    return refCount.current;
}