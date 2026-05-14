import { useState } from "react"
import Form from "./components/Form"
import Form2 from "./components/Form2";

function App() {
  const [border,setBorder] = useState(false);
  return (
    <>
      <Form border={border}>
        <input type="text"/>
      </Form>
      <button onClick={() => setBorder(!border)}>Toggle Border</button>
      <hr />
      <Form2 border={border}></Form2>
    </>
  )
}

export default App
