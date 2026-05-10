import { useState } from "react"
import AddTask from "./components/AddTask"
import TaskApp from "./components/TaskApp"
import TaskProvider from "./components/TaskProvider"
import SomeThing from "./components/SomeThing";
import { TextContext } from "./contexts/TextContext";

function App() {
  const [text,setText] = useState('');
  return (
    <>
      <TaskProvider>
        <AddTask></AddTask>
        <TaskApp></TaskApp>
      </TaskProvider>
      <hr />
      <input type="text" value={text} onChange={e => {
        setText(e.currentTarget.value);
      }}/>
      <TextContext value= {text}>
        <SomeThing></SomeThing>
      </TextContext>
    </>
  )
}

export default App

//  Không phải chỉ có mỗi children mới nhận được context. Các component được gọi trực tiếp bên trong function Component vẫn có thể nhận được 
// context
//=> Xem TaskApp để hiểu rõ hơn
//