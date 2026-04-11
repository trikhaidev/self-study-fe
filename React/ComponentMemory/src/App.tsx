import React, { useState } from "react"

function App() {
  const [text, setText] = useState('');
  function handleInput(e: React.InputEvent<HTMLInputElement>){
    setText(e.currentTarget.value);
  }

  const [y,setY] = useState(10);
  const [x, setX] = useState(0);
  function handleMouseMove(e:React.MouseEvent<HTMLInputElement>) {
    console.log(`${e.clientX} - ${e.clientY}`);
    setX(e.clientX);
    setY(e.clientY);
  }

return (
  <>
    <div style={
      {
        fontSize:50
      }
    }>
      <input type="text" onInput={handleInput} value={text} style={{height:50,width:300,fontSize:50}}/> 
      <p>Content: {text}</p>
      <input type="text" onInput={ handleInput} value={text} style={{height:50,width:300,fontSize:50}}/>
    </div><hr />
    <div style={
      {
        width:250,
        height:250,
        border: '1px solid black',
        background: `rgb(100,${x},${y})`
      }
    }
    onMouseMove={handleMouseMove}
    >

    </div>
  </>
)
}

export default App
