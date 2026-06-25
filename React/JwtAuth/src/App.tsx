import { useEffect, useEffectEvent, useState } from 'react'
import './App.css'
import Login from './components/auth-component/Login'

export const HOST_NAME = "https://localhost:7180"

function App() {
  const [accessToken, setAccessToken] = useState<string | null | undefined>();
  const [loading, setLoading] = useState(true);
  const refreshSession = useEffectEvent(() => {
    async function handle() {
      try {
        const res = await fetch(`${HOST_NAME}/Auth/Session/RefreshSession`, {
          method: "PUT",
          credentials: "include"
        });
        if (res.ok) {
          const body = await res.json();
          setAccessToken(body.data.accessToken);
        }
        else {
          setAccessToken(null);
        }
      }
      catch {
        setAccessToken(null);
      }
      setLoading(false);
    }
    handle();
  });
  useEffect(() => {
    refreshSession();
  }, []);

  async function handleLogout() {
    const res = await fetch(`${HOST_NAME}/Auth/Session/Logout`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    });
    if(res.ok){
      setAccessToken(null);
    }
  }

  return (
    <>
      <div className='main-container'>
        {
          loading &&
          <h1>Đang tải ...</h1>
        }
        {
          (!accessToken && !loading) &&
          <Login onLogin={accessToken => {
            setAccessToken(accessToken);
          }}></Login>
        }
        {
          accessToken &&
          <>
            <h1>Ban da dang nhap <button className='button-logout' onClick={handleLogout}>Đăng xuất</button></h1>
          </>
        }
      </div>
    </>
  )
}

export default App
