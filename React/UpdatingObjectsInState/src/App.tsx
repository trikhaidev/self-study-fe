import { useState } from "react"
import { useImmer } from "use-immer";
import Form from "./components/Form";

// lệnh cái đặt Immer: npm install use-immer
function App() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
    showPassword: false
  });

  const [position, setPosition] = useImmer({
    x: 0,
    y: 0,
    countObj: {
      countNumber: 0
    }
  });

  // Cách 1: Viết hàm riêng cho từng input
  // function handleUsernameChange(newUsername: string){
  //   setLoginForm({...loginForm, username:newUsername});
  // }

  // function handlePasswordChange(newPassword:string){
  //   setLoginForm({
  //     ...loginForm,
  //     password:newPassword
  //   });
  // }

  // function handleShowPasswordChange(){
  //   setLoginForm({
  //     ... loginForm,
  //     showPassword: !loginForm.showPassword
  //   });
  // }

  // Cách 2
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setLoginForm({
    //   ...loginForm,
    //   [e.currentTarget.name] : e.currentTarget.value
    // });

    // setLoginForm(obj => {
    //   const newObj = {
    //     username:"default",
    //     password:"default",
    //     showPassword:true
    //   };
    //   return newObj;
    // });

    const propertyName = e.currentTarget.name;
    const propertyValue = e.currentTarget.value;
    setLoginForm(obj => ({
      ...obj,
      [propertyName] : propertyValue
    }));

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Cách dướichỉ hoạt động đúng khi envent handle chạy lần đầu. Nguyên nhân là do ở lần đầu chạy event handle thì state sẽ được setState lần đầu tiên mà vì là lần đầu tiên nên 
    //update function sẽ được chạy ngay lập tức khi gọi setState. Còn từ lần thứ 2 trở đi thì update function sẽ được đưa vào hàng đợi, ở lần re-render tiếp theo React mới duyệt
    //qua hàng đợi để cập nhật state mới. Chính vì update function chỉ được chạy sau khi re-render và gọi useState nên đối tưởng event đã bị hủy trước đó, dẫn đến không thể truy 
    // cập vùng nhớ
    // setLoginForm(obj => {
    //   alert("set loginform");
    //   const newObj = {
    //     ...obj,
    //     [e.currentTarget.name]: e.currentTarget.value
    //   };
    //   return newObj;
    // });


    ///////////////////////////////////////////////////////////////////////////////////////////
    alert("input change");
    // setPosition(obj => {
    //   obj.countObj.countNumber += 1;
    // });
  }

  // Cách 3: Dùng useImmer
  // Update function của cách này nhận tham số đầu vào là state hiện tại. Nó k cần return về bất cứ thứ gì, chỉ đơn giản là thao tác với state (tham số) được truyền vào. Immer
  //sẽ tự động biết được thuộc tính nào đã thay đổi.
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    setPosition(p => {
      p.x = e.clientX;
      p.y = e.clientY;
      p.countObj.countNumber += 1;
    });
  }
  return (
    <>
      <div>
        <input name="username" type="text" value={loginForm.username} onChange={handleInputChange} />
      </div>
      <div>
        <input name="password" type={loginForm.showPassword ? 'text' : 'password'} value={loginForm.password} onChange={handleInputChange} />
      </div>
      <div>
        <input type="checkbox" checked={loginForm.showPassword} onChange={() => setLoginForm({ ...loginForm, showPassword: !loginForm.showPassword })} />
      </div>
      <hr />
      <div style={{
        width: 250,
        height: 250,
        border: "1px solid black",
        backgroundColor: `rgb(100,${position.x},${position.y})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
        onMouseMove={handleMouseMove}
      >
        {position.countObj.countNumber}
      </div>
      <hr />
      <Form />
    </>
  )
}

export default App
