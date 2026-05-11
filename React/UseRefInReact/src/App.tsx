import { useRef, useState } from "react"

function App() {
  const [text, setText] = useState('');
  const [title,setTitle] = useState('');
  const delay = useRef<null|number>(null);
  return (
    <>
      <h1>The title is {title}</h1>
      <input type="text" value={text} onChange={e => {
        if(delay.current){
          clearTimeout(delay.current);
        }

        const nextText = e.currentTarget.value;

        setText(nextText);
        delay.current = setTimeout(() => {
          setTitle(nextText);
        }, 1000);
      }}/>
    </>
  )
}

export default App
