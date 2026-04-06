import type { ReactNode } from "react";

let count = 0; 
count++;

type SayHelloProps = {
    loop:number
}
export default function SayHello(p:SayHelloProps){
    // nextCount(); - Gọi hàm này => Count sẽ được gán lại giá trị mới => không tuân thủ nguyên tắc Keep Components Pure.
    // count = count + 1; - Cách này cũng tương tự như trên, tuy nhiên nó sẽ bị ESlint phát hiện và cảnh báo.
    // const random = Math.random(); // cũng không Pure => do nó trả ra các kết quả khác nhau mỗi lần gọi
    // new Date().toLocaleTimeString(): cũng không Pure vì nó trả ra kết quả khác mỗi lần gọi ở những thời điểm khác nhau.

    // => Dù tất cả các cách đều không tuân thủ quy tắc Keep Components Pure của React nhưng trên thực tế chương trình vẫn chạy bình thường và không hề có lỗi nào xảy ra.
    // => Ta nên tuân thủ Keep Components Pure để tránh những lỗi khó hiểu, khó phát hiện, khó kiểm soát và không mong muốn.

    // Một function component được coi là Pure khi nó luôn trả về cùng một kết quả cho một cùng một input và nó sẽ không
    //tác đến đến bất kì biến, đối tượng, mảng, ... nào đã được khai báo trước đó. Xem rõ hơn ở https://react.dev/learn/keeping-components-pure

    /**
     * Lưu ý quan trọng:
        - React không đảm bảo thứ tự render giữa các component.
        Mỗi component phải:
            + “Tự suy nghĩ”
            + Không phụ thuộc component khác trong lúc render
        - Render giống như bài thi: mỗi component tự làm bài của mình.
     */
    console.log("SayHello render");
    const array:ReactNode[] = [];
    for(let i = 0; i < p.loop; i++){
        array.push(<SomeThing n={i + 1} key={i + 1}></SomeThing>);
    }
    return (
        <>
            <h1>Hello world {count} - {new Date().toLocaleTimeString()}</h1>
            <hr />
            {/* <SomeThing n = {count + 1}></SomeThing>
            <SomeThing n = {count + 2}></SomeThing>
            <SomeThing n = {count + 3}></SomeThing> */}
            {/* <SomeThing n = {random}></SomeThing> */}

            {array}
        </>
    );
}

type SomeThingProps = {
    n:number
}
function SomeThing(p :SomeThingProps){
    return <p>
        Some thing {p.n}
    </p>
}

// function nextCount(){
//     count = count + 1;
// }