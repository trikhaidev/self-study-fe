import { useState } from "react";
import {useOnlineStatus, useOnlineStatus2} from "./custom-hooks/useOnlineStatus"
import useSomething from "./custom-hooks/useSomething";

function App() {
  const [tang, setTang] = useState(false);
  const onlineObj = useOnlineStatus();
  const onlineObj2 = useOnlineStatus2();
  const count = useSomething({tang:tang});
  return (
    <>
      <h1>{onlineObj.isOnline ? `Online: ${onlineObj.connectedTime}` : 'Connecting ...'}</h1>
      <hr></hr>
      <h1>{onlineObj2.isOnline ? `Online: ${onlineObj2.connectedTime}` : 'Connecting ...'}</h1>
      <button onClick={() => setTang(!tang)}>Toggle Tang</button>
      <p>Count: {count}</p>
    </>
  )
}

export default App
