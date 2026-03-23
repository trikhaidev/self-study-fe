import './App.css'
import Header from './components/header/header-component'
import Content from './components/content/content-component';

function App() {
  var date = new Date();
  return (
    <>
      <div id='container'>
        <Header></Header>
        <Content/>
        <p>Time: <strong>{date.toLocaleTimeString()}</strong></p>
      </div>
    </>
  )
}

export default App
