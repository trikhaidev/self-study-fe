import { useEffect, useEffectEvent, useState } from 'react';
import './App.css'
import Auth from './components/auth/Auth';
import { HttpClientService, HttpClientContext } from './services/HttpClientService';
import type { GetInfo } from './models/response/GetInfo';

export interface Auth {
    userName: string | null | undefined,
    accessToken: string | null | undefined
}

function App() {
    const [auth, setAuth] = useState<Auth>({
        userName: '',
        accessToken: '',
    });
    const [info, setInfo] = useState<GetInfo|null>(null);
    const [error, setError] = useState<string|null>(null);
    const httpClient = new HttpClientService(auth.accessToken, setAuth);
    const refreshSession = useEffectEvent(async () => {
        await httpClient.RefreshSession();
    });
    useEffect(() => {
        refreshSession();
    }, []);

    async function handleGetInfo(){
        try{
            const res = await httpClient.Fetch<GetInfo>({
                path:'Auth/GetLoginInfo',
                method:'GET',
                credentials:'include',
            });
            if(res.body?.isOk){
                setInfo(res.body.data!);
                setError(null);
            }
            else if(res.res){
                if(res.res.status === 401){
                    setError('Bạn chưa đăng nhập hoặc phiên đăng nhập đã hết hạn');
                    setInfo(null);
                }
                else{
                    setError(`Lỗi: ${res.res.status} ${res.res.statusText}`);
                    setInfo(null);
                }
            }
            else{
                setError('Lỗi: Không thể kết nối đến server');
            }
        }
        catch(e){
            setError(`Lỗi: ${e}`);
            setInfo(null);
        }
    }

    return (
        <>
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
            <hr />
            <div>
                <div>
                    <button onClick = {handleGetInfo}>Get Info</button>
                    {
                        error && <p style={{ color: 'red' }}>{error}</p>
                    }
                    {
                        info && 
                        <ul>
                            <li>Token: {info.token}</li>
                            <li>Exp: {info.exp}</li>
                            <li>UserName: {info.userName}</li>
                            <li>Email: {info.email}</li>
                            <li>Roles: {info.roles.join(', ')}</li>
                        </ul>
                    }
                </div>
            </div>
        </>
    );
}

export default App
