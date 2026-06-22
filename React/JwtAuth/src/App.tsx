import { useEffect, useEffectEvent, useState } from 'react'
import './App.css'
import Login from './components/auth-component/Login'

export const HOST_NAME = "https://localhost:7180"

function App() {
  const [accessToken, setAccessToken] = useState<string | null | undefined>();
  const refreshSession = useEffectEvent(() => {
    async function handle(){
      const res = await fetch(`${HOST_NAME}/Auth/Session/RefreshSession`,{
        method:"PUT",
        credentials:"include"
      });
      if(res.ok){
        const body = await res.json();
        setAccessToken(body.data.accessToken);
      }
    }
    handle();
  });
  useEffect(() => {
    refreshSession();
  },[]);

  return (
    <>
      <div className='main-container'>
        {
          !accessToken &&
          <Login onLogin={accessToken => {
            setAccessToken(accessToken);
          }}></Login>
        }
        {
          accessToken &&
          <h1>Ban da dang nhap</h1>
        }
      </div>
    </>
  )
}

export default App
