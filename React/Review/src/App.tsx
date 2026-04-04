import DTO from './assets/components/dtoComponent';
import type SomeThing from './models/someThing'
import S from "./assets/components/someThingComponent";
function App() {
  const s:SomeThing = {
    name: "Kai",
    size : 35
  };
  return (
    <>
      <DTO data = {s}>
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
      </DTO>      
    </>
  )
}

export default App
