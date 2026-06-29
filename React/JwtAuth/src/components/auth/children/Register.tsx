import { useContext, useState } from "react";
import { HttpClientContext } from "../../../services/HttpClientService";

type RegisterTypeProps = {
    onRegister: () => void
}
export default function Register({onRegister}:RegisterTypeProps){
    const [showPassword, setShowPassword] = useState(false);
    const [message,setMessage] = useState<string|null|undefined>('');
    const [form,setForm] = useState({
        email:'',
        dateOfBirth: new Date(),
        userName :'',
        password:'',
        confirmPassword:''
    });
    const httpClient = useContext(HttpClientContext);

    const disableSubmit = !form.userName || !form.password || !form.confirmPassword || form.password != form.confirmPassword; 

    function handleInputChange(e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>){
        setForm({
            ...form,
            [e.currentTarget.name]:e.currentTarget.value
        });
    }

    async function handleSubmit(e:React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();
        if(!httpClient){
            throw new Error("Httpclient is null!");
        }

        const body = await httpClient.Fetch<number>({
            path:'Auth/Register',
            method:"POST",
            body:JSON.stringify(form)
        });
        if(body?.isOk){
            onRegister();
        }
        else{
            setMessage(body?.message);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required value={form.email} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="dateOfBirth">Ngày sinh</label>
                    <input type="date" id="dateOfBirth" name="dateOfBirth" value={form.dateOfBirth.toString()} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="userName">Tên đăng nhập</label>
                    <input type="text" id="userName" name="userName" value={form.userName} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="password">Mật khẩu</label>
                    <input type= {showPassword ? 'text' : 'password'} id="password" name="password" value={form.password} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
                    <input type= {showPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handleInputChange}/>
                    {form.password != form.confirmPassword && <span>Xác nhận mật khẩu không giống</span>}
                </div>
                <div>
                    <label htmlFor="showPassword">
                        <input type="checkbox" id="showPassword" checked={showPassword} onChange={e => setShowPassword(e.currentTarget.checked)}/>
                        Hiện mật khẩu
                    </label>
                </div>
                <div>
                    <button disabled = {disableSubmit} type="submit">Đăng ký</button>
                    <span style={{color:'red'}}>{message}</span>
                </div>
            </form>
        </>
    );
}