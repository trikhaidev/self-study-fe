import { useState } from "react";

export default function Register(){
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div>
                    <label htmlFor="dateOfBirth">Ngày sinh</label>
                    <input type="date" id="dateOfBirth" name="dateOfBirth"/>
                </div>
                <div>
                    <label htmlFor="userName">Tên đăng nhập</label>
                    <input type="text" id="userName" name="userName"/>
                </div>
                <div>
                    <label htmlFor="password">Mật khẩu</label>
                    <input type= {showPassword ? 'text' : 'password'} id="password" name="password"/>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
                    <input type= {showPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword"/>
                </div>
                <div>
                    <label htmlFor="showPassword">
                        <input type="checkbox" id="showPassword" checked={showPassword} onChange={e => setShowPassword(e.currentTarget.checked)}/>
                        Hiện mật khẩu
                    </label>
                </div>
                <div>
                    <button>Đăng ký</button>
                </div>
            </form>
        </>
    );
}