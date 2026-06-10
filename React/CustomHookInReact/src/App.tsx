import { useEffect, useRef, useState } from "react";
import {useOnlineStatus, useOnlineStatus2} from "./custom-hooks/useOnlineStatus"
import useSomething from "./custom-hooks/useSomething";

function App() {
  const [tang, setTang] = useState(false);
  const onlineObj = useOnlineStatus();
  const onlineObj2 = useOnlineStatus2();
  const count = useSomething({tang:tang});

  const myRef = useRef(null);

  useEffect(() => {
    let id:number;
    let size = 50;
    if(count % 2 == 0){
      id = setInterval(() => {
        size += 2;
        myRef.current.style.fontSize = size + 'px';
        // myRef.current.style.transform = `1000`;
        // myRef.current.style.opacity = 0;
      },1000);
    }
    return () => {
      clearInterval(id);
    }
  },[count]);
  return (
    <>
      <h1>{onlineObj.isOnline ? `Online: ${onlineObj.connectedTime}` : 'Connecting ...'}</h1>
      <hr></hr>
      <h1>{onlineObj2.isOnline ? `Online: ${onlineObj2.connectedTime}` : 'Connecting ...'}</h1>
      <button onClick={() => setTang(!tang)}>Toggle Tang</button>
      <p>Count: {count}</p>

      {
        count % 2 === 0 && <h1 ref={myRef}>Hello world</h1>
      }
    </>
  )
}

/**
 *  Sử dụng flushSync để cập nhật state ngay lập tức. Tức là k cần phải đợi đến lần render tiếp theo mới cập nhật state.
 * Lưu ý: biến trạng thái hiện tại vẫn sẽ mang giá trị cũ trong lần render hiện tại.
 * 
 * Sử dụng useImperativeHandle để custom object được trả về khi sử dụng ref để thao tác với DOM
 * Chi tiết xem tại: https://react.dev/learn/manipulating-the-dom-with-refs#accessing-another-components-dom-nodes
 */



export default App
