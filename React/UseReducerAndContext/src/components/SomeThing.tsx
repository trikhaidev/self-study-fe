import { useContext } from "react";
import { TextContext } from "../contexts/TextContext";

export default function SomeThing(){
    //const text = useContext(TextContext); // đọc context GẦN NHẤT được truyền từ component cha
   return (
    <div style={{
        border:'1px solid red'
    }}>
        <h1>This is Something Component ...</h1>
        {/* <TextContext value= {'Value from SomeThing'}>
            <SomeThingContent></SomeThingContent>
        </TextContext> */} {/**Ghi đè context */}

        <SomeThingContent></SomeThingContent> 
        {/**Không ghi đè context => sẽ nhận được context GẦN NHẤT truyền từ component cha => Nên dùng cách này nếu chỉ cần truyền lại context cho component con*/}

        {/* <TextContext value= {text}> 
        {/** Cách này truyền lại context mà SomeThing đã đọc được cho SomeThingContent.
        * Cách này khá dư thừa và không cần thiết (không cần truyền lại context cho SomeThingContent) vì SomeThingContent hoàn toàn có thể tự nhận được context đó
        **=> Nên dùng cách số 2 ở trên/}
            <SomeThingContent></SomeThingContent>
        </TextContext> */}
    </div>
   ); 
}

export function SomeThingContent(){
    const text = useContext(TextContext); // đọc context GẦN NHẤT được truyền từ component cha
    return (
        <>
            <h4>SomeThingContent: <span style={{color:'orange'}}>{text}</span></h4>
        </>
    );
}