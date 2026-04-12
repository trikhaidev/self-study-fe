import React, { useState } from "react"

function App() {
  const [text, setText] = useState('');
  function handleInput(e: React.InputEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
  }

  const [y, setY] = useState(10);
  const [x, setX] = useState(0);
  function handleMouseMove(e: React.MouseEvent<HTMLInputElement>) {
    console.log(`${e.clientX} - ${e.clientY}`);
    setX(e.clientX);
    setY(e.clientY);
  }
  const [width, setWith] = useState(250);
  const [height, setHeight] = useState(250);
  return (
    <>
      <div style={
        {
          fontSize: 50
        }
      }>
        <input type="text" onInput={handleInput} value={text} style={{ height: 50, width: 300, fontSize: 50 }} />
        <p>Content: {text}</p>
        <input type="text" onInput={handleInput} value={text} style={{ height: 50, width: 300, fontSize: 50 }} />
      </div><hr />
      <button onClick={() => setHeight(height - 10)}>-</button>
      <button onClick={() => setHeight(height + 10)}>+</button>
      <div style={
        {
          width: width,
          height: height,
          border: '1px solid black',
          background: `rgb(100,${x},${y})`
        }
      }
        onMouseMove={handleMouseMove}
      >
      </div>
      <button onClick={() => setWith(width - 10)}>-</button>
      <button onClick={() => setWith(width + 10)}>+</button>
    </>
  )
}

export default App
