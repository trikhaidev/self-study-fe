import { useState } from "react";
import Login from "./children/Login";
import Register from "./children/Register";

export default function Auth(){
    const [isLogin, setIsLogin] = useState(true);

    let content:React.JSX.Element;
    if(isLogin){
        content = <Login></Login>;
    }
    else{
        content = <Register onRegister={() => {
            setIsLogin(true);
        }}></Register>;
    }

    return (
        <>
            {content}
            <a onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Bạn chưa có tải khoản ?' : 'Bạn đã có tài khoản ?'}</a>
        </>
    );
}