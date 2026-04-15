import { useState } from "react"
import Input from "./components/Input";

function App() {
  const [number, setNumber] = useState(0);
  console.log("App tsx: "+number);
  return (
    <>
    <button onClick={() => setNumber((prev) => prev + 1)}>Increment</button>
      <hr />
      <input type="text" />
      <hr />
      <Input number={number}></Input>
      <hr />
      <Input number={number}></Input>
    </>
  )
}

export default App
