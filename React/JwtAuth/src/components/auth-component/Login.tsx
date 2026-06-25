import { useState } from "react";
import "./login.css"
import { HOST_NAME } from "../../App";


export type LoginTypeProps = {
    onLogin(accessToken: string): void;
};
export default function Login({ onLogin }: LoginTypeProps) {
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);

    async function handleSubmit(){
        const res = await fetch(`${HOST_NAME}/Auth`,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            credentials:"include", //Login phải bao gồm credentials:"include" thì browser mới lưu cookie
            body: JSON.stringify({
                userName : userName,
                password : password
            }),
        });
        if(res.ok){
            const body = await res.json();
            onLogin(body.data.accessToken!);
        }
    }

    return (
        <div className="log">
            <div className="log-title">
                <h3>Đăng nhập</h3>
            </div>
            <div>
                <input className="input-form" type="text" placeholder="Tên đăng nhập" onChange={e => setUserName(e.currentTarget.value)}/>
            </div>
            <div>
                <input className="input-form" type={showPass ? "text" : "password"} placeholder="Mật khẩu" onChange={e => setPassword(e.currentTarget.value)}/>
            </div>
            <div>
                <label htmlFor="showPassword">
                    <input id="showPassword" type="checkbox" onChange={e => {
                        setShowPass(e.currentTarget.checked)
                    }} />
                    Hiện mật khẩu
                </label>
            </div>
            <div>
                <button className="btn-login" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    );
}