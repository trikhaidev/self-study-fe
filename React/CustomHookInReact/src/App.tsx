import {useOnlineStatus, useOnlineStatus2} from "./custom-hooks/useOnlineStatus"

function App() {
  const onlineObj = useOnlineStatus();
  const onlineObj2 = useOnlineStatus2();
  return (
    <>
      <h1>{onlineObj.isOnline ? `Online: ${onlineObj.connectedTime}` : 'Connecting ...'}</h1>
      <hr></hr>
      <h1>{onlineObj2.isOnline ? `Online: ${onlineObj2.connectedTime}` : 'Connecting ...'}</h1>
    </>
  )
}

export default App
