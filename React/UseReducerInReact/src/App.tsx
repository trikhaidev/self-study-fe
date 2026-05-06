import { useReducer } from "react"
import { xuly } from "./models/Task";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, xuLyTasks] = useReducer(xuly,[]);

  function handleAddTask(content:string){
    xuLyTasks({
      type:'add',
      newTask:{
        content:content,
        isDone:false,
      }
    });
  }

  function handleRemoveTask(id:number){
    xuLyTasks({
      type:'remove',
      removeId:id,
    });
  }

  function handleChangeIsDone(id:number, isDone:boolean){
    xuLyTasks({
      type : 'change_isDone',
      changeIsDone : {
        id:id,
        isDone:isDone,
      }
    });
  }

  function handleEditing(id:number){
    xuLyTasks({
      type :'editing',
      toggleIsEditing: id,
    });
  }

  function handleChangeContent(id:number, content:string){
    xuLyTasks({
      type:'change_content',
      changeContent:{
        id:id,
        newContent:content,
      }
    });
  }

  return (
    <>
      <AddTask onAddTask={handleAddTask}></AddTask>
      <hr />
      <Tasks 
        tasks={tasks} 
        onRemove={handleRemoveTask} 
        onChangeIsDone={handleChangeIsDone}
        onEditing={handleEditing}
        onChangeContent={handleChangeContent}
      ></Tasks>
    </>
  )
}

export default App
