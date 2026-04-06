import Detail, { type DetailProps } from "./components/Detail"
import ToDoList from "./components/ToDoList"
import "./App.css"
function App() {
  const detailToDoList:DetailProps = {
    items: [
      {
        content: "Learn React",
        done : false,
      },
      {
        content : "Play LOL",
        done :true
      },
      {
        content : 'Drink Water',
        done: true
      },
      {
        content : 'Learn .NET',
        done :false
      }
    ],
    type : true
  };
  return (
    <div id="app">
      <ToDoList title="To Do List của tôi ">
        <Detail {... detailToDoList}></Detail>
      </ToDoList>
    </div>
  )
}

export default App
