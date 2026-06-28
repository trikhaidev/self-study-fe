import { useEffect, useEffectEvent, useState } from 'react';
import './App.css'
import Auth from './components/auth/Auth';
import { HttpClientService, HttpClientContext } from './services/HttpClientService';

function App() {
    const [accessToken ,setAccessToken] = useState<string|null|undefined>(null);
    const httpClient = new HttpClientService(accessToken,setAccessToken);
    const refreshSession = useEffectEvent( async () => {
        await httpClient.RefreshSession();
    });
    useEffect(() => {
        refreshSession();
    },[]);

    return(
        <HttpClientContext value={httpClient}>
            {
                !accessToken &&
                <Auth></Auth>
            }
            {
                accessToken && <h1>Bạn đã đăng nhập <button onClick={async () => {
                    await httpClient.Logout();
                }}>Đăng xuất</button></h1>
            }
        </HttpClientContext>
    );
}

export default App
