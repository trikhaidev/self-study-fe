import { useState } from "react"
import Count from "./components/Count"
import HelloWorld from "./components/HelloWorld";


function App() {
  const [check, setcheck] = useState(true);
  return (
    <>
      <HelloWorld show={!check}></HelloWorld>
      {check ? <p>check true</p> : ' asas  as as asasd'}
      <Count></Count>
      <Count></Count>
      <input type="checkbox" checked = {check} onChange={e => setcheck(e.currentTarget.checked)}/>
    </>
  )
}

export default App
