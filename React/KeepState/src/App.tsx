import { useState } from "react"
import Count from "./components/Count"
import HelloWorld from "./components/HelloWorld";


function App() {
  const [check, setcheck] = useState(true);
  if (check) {
    return (
      <>
        <HelloWorld show={!check}></HelloWorld>
        {check ? <p>check true</p> : ' asas  as as asasd'}
        <hr />
        <Count check={check}></Count>
        <Count check={check}></Count>
        <input type="checkbox" checked={check} onChange={e => setcheck(e.currentTarget.checked)} />
        <hr />
        <input type="text" key='ok'/>
      </>
    );
  }
  return (
    <>
      <HelloWorld show={!check}></HelloWorld>
      {check ? <p>check true</p> : ' asas  as as asasd'}
      <Count check={check}></Count>
      <Count check={check}></Count>
      <input type="checkbox" checked={check} onChange={e => setcheck(e.currentTarget.checked)} />
      <input type="text" key='ok'/>
    </>
  )
}

export default App
