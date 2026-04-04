// import DTO from './components/dtoComponent';
// import type SomeThing from './models/someThing'

import Item from "./components/itemComponent"
import U from "./components/UComponent"

// import S from "./components/someThingComponent";
function App() {
  // const s:SomeThing = {
  //   name: "Kai",
  //   size : 35
  // };
  return (
    <>
      {/* <DTO data = {s}>
        <div style={{
          backgroundColor : 'red',
          border : '1px solid yellow',
          width : 500,
          height : 500,
          color : 'orange',
          display : 'flex',
          justifyContent : "center",
          alignItems : "center",
          fontSize: 100
        }}>
          Ở ngoài App.tsx
        </div>
        <hr />
        <S data={{
          name : 'J36',
          size: 85
        }}>
          <h3>Ok Bro!</h3>
        </S>
      </DTO>       */}
      <hr />
      <U style={{
        backgroundColor:'#a3e5ee',
        fontSize:50,
        // listStyle:'none'
      }}>
        <Item content="Balo" checked = {true}></Item>
        <Item content="Razer Orochi v2" checked={false}></Item>
        <Item {... {content:'Phone', checked :false}}></Item>
        <Item checked = {true}></Item>
      </U>
    </>
  )
}

export default App
