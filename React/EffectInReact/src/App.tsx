import { useState } from "react"
import Form from "./components/Form"
import Form2 from "./components/Form2";
import Input from "./components/Input";
import Time from "./components/Time";
import CountTime from "./components/CountTime";
import SearchProduct from "./components/SearchProduct";

function App() {
  const [border,setBorder] = useState(false);
  return (
    <>
      <Form border={border}>
        <Input></Input>
      </Form>
      <button onClick={() => setBorder(!border)}>Toggle Border</button>
      <hr />
      <Form2 border={border}></Form2>
      <hr />
      {
        border && <Time></Time>
      }
      <hr />
      <hr />
      <CountTime></CountTime>
      <hr />
      <hr />
      <SearchProduct></SearchProduct>
    </>
  )
}

export default App
/**
 * Truyền children về bản chất nó giống với việc gọi trực tiếp component con trong component cha 
 * => Nếu kết quả render của component sau mỗi lần return mà children nằm ở những vị trí khác nhau hoặc được bọc trong những thẻ khác nhau 
 * thì state của component con không được giữ
 */