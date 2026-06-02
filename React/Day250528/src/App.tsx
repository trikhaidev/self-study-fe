import Chat from "./components/Chat"
import EffectEvent from "./components/EffectEvent"
import Memo from "./components/Memo"
import Network from "./components/Network"
import Timer from "./components/Timer"
import { InCrementContext } from "./contexts/IncrementContext"

function App() {
  return (
    <>
      <Chat></Chat>
      <hr />
      <Memo></Memo>
      <hr></hr>
      <EffectEvent></EffectEvent>
      <hr></hr>
      <InCrementContext value={5}> /** Truyền giá trị cho context. Timer sẽ đọc được giá trị này (2.2) */
        <Timer></Timer>
      </InCrementContext>
      <hr></hr>
      <Network></Network>
    </>
  )
}

export default App
