import AddTask from "./components/AddTask"
import TaskApp from "./components/TaskApp"
import TaskProvider from "./components/TaskProvider"

function App() {
  return (
    <>
      <TaskProvider>
        <AddTask></AddTask>
        <TaskApp></TaskApp>
      </TaskProvider>
    </>
  )
}

export default App

//  Không phải chỉ có mỗi children mới nhận được context. Các component được gọi trực tiếp bên trong function Component vẫn có thể nhận được 
// context
//=> Xem TaskApp để hiểu rõ hơn
//