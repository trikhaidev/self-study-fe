import ToDoList from './components/ToDoList';
import {type ToDoListItem} from './components/ListItem';
import './App.css'

function App() {
  const items: ToDoListItem[] = [
    {
        id: 1,
        title: "Học TypeScript cơ bản",
        isDone: true
    },
    {
        id: 2,
        title: "Làm bài tập React",
        isDone: false
    },
    {
        id: 3,
        title: "Đọc tài liệu về Tailwind CSS",
        isDone: false
    },
    {
        id: 4,
        title: "Push code lên GitHub",
        isDone: true
    }
];
  return (
    <div id='app' className='min-h-screen bg-gray-100 flex items-center justify-center' onClickCapture={() =>{
      alert("App default!");
    }}>
      <ToDoList items={items} subject='Hello world' type ={true} isOrderList = {false}
      onClickCapture={() => {alert(`ToDoList onClick`)}}
      ></ToDoList>
    </div>
  )
}

export default App
