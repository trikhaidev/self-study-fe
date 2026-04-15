import { useState } from "react"
import Input from "./components/Input";

function App() {
  const [number, setNumber] = useState(0);
  if (number === 0) {
    setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);
  }
  console.log("App tsx");
  return (
    <>
      <input type="text" />
      <hr />
      <Input number={number}></Input>
    </>
  )
}

export default App
