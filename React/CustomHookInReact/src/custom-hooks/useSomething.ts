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
     * 
     */
    return refCount.current;
}