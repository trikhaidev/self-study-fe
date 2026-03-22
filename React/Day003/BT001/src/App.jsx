import './App.css'

const date = new Date()

const headers = ["Hello world", "Welcome to my website", "Have a nice day"];

function App() {
  return (
    <div id='body'>
      <div id='container'>
        <Header />
        <Content number="3" />
      </div>
    </div>
  )
}


export function Header() {
  var index = Math.floor(Math.random() * headers.length);
  return (
    <>
      <h1>{headers[index]}</h1>
    </>
  );
}

function Content(p) {
  var r = Math.random() * p.number;
  return <>
    <p>Today <strong>{date.toLocaleDateString()}</strong>. Time <strong>{date.toLocaleTimeString()}</strong></p>
    <p>Số: {r}</p>
    <p>{Math.random()}</p>
  </>
}

export default App
