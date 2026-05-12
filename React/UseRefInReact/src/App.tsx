import { useRef, useState } from "react"
import Products from "./components/Products";

function App() {
  const [text, setText] = useState('');
  const [title,setTitle] = useState('');
  const delay = useRef<null|number>(null);

  function handleChange(e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>){
    if(delay.current){
      clearTimeout(delay.current);
    }

    const nextText = e.currentTarget.value;
    setText(nextText);
    delay.current = setTimeout(() => {
      setTitle(nextText);
    }, 1000);
  }

  return (
    <>
      <h1>The title is {title}</h1>
      <input type="text" value={text} onChange={handleChange}/>
      <hr />
      <Products></Products>
    </>
  )
}

export default App
