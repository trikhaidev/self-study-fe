import { useEffect, useEffectEvent, useState } from 'react';
import './App.css'
import Auth from './components/auth/Auth';
import { HttpClientService, HttpClientContext } from './services/HttpClientService';

export interface Auth {
    userName: string | null | undefined,
    accessToken: string | null | undefined
}

function App() {
    const [auth, setAuth] = useState<Auth>({
        userName: '',
        accessToken: '',
    });
    const httpClient = new HttpClientService(auth.accessToken, setAuth);
    const refreshSession = useEffectEvent(async () => {
        await httpClient.RefreshSession();
    });
    useEffect(() => {
        refreshSession();
    }, []);

    return (
        <HttpClientContext value={httpClient}>
            {
                !auth.accessToken &&
                <Auth></Auth>
            }
            {
                auth.accessToken && <h1>Xin chào {auth.userName} <button onClick={async () => {
                    await httpClient.Logout();
                }}>Đăng xuất</button></h1>
            }
        </HttpClientContext>
    );
}

export default App
