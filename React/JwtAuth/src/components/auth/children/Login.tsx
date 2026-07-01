import { useContext, useState } from "react";
import { HttpClientContext } from "../../../services/HttpClientService";

export default function Login(){
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState<string|null>(null);
    const httpClient = useContext(HttpClientContext);
    const [info, setInfo] = useState({
        userName : '',
        password :''
    });

    function handleInputChange(e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>){
        setInfo({
            ...info,
            [e.currentTarget.name]:e.currentTarget.value
        });
    }

    async function handleSubmit(e:React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();
        if(!httpClient){
            throw new Error("HttpClient is null");
        }
        try{
            await httpClient.Login(info.userName,info.password);
            setMessage(null);
        }
        catch{
            setMessage('Đăng nhập thất bại');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">Tên đăng nhập</label>
                    <input type="text" id="userName" name="userName" value={info.userName} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="password">Mật khẩu</label>
                    <input type={showPassword ? 'text' : 'password'} id="password" name="password" value={info.password} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="showPassword">
                        <input type="checkbox" id="showPassword" checked={showPassword} onChange={e => setShowPassword(e.currentTarget.checked)}/>
                        Hiện mật khẩu
                    </label>
                </div>
                <div>
                    <button disabled={!info.userName || !info.password} type="submit">Đăng nhập</button>
                </div>
                {
                    message && <p style={{color:'red'}}>{message}</p>
                }
            </form>
        </>
    );
}
