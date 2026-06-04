import { useReducer } from "react"
import { tasksReducer } from "./models/Task";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Form from "./components/Form";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer,[]);

  function handleAddTask(content:string){
    dispatch({
      type:'add',
      newTask:{
        content:content,
        isDone:false,
      }
    });
  }

  function handleRemoveTask(id:number){
    dispatch({
      type:'remove',
      removeId:id,
    });
  }

  function handleChangeIsDone(id:number, isDone:boolean){
    dispatch({
      type : 'change_isDone',
      changeIsDone : {
        id:id,
        isDone:isDone,
      }
    });
  }

  function handleEditing(id:number){
    dispatch({
      type :'editing',
      toggleIsEditing: id,
    });
  }

  function handleChangeContent(id:number, content:string){
    dispatch({
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
      <hr />
      <Form></Form>
    </>
  )
}

export default App
