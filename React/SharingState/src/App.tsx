import { useState } from 'react'
import Form from './components/Form'
import Input from './components/Input'

function App() {
  const [value, setValue] = useState('');
  // function handleChange(e:React.ChangeEvent<HTMLInputElement>){
  //   setValue(e.currentTarget.value);
  // }
  return (
    <>
      <Form title='First Form'>
        <Input lable='Full name'value={value} onChange={setValue}></Input>
      </Form>
      <hr />
      <Form title='Biểu mẫu số 2'>
        <Input lable='Họ&tên' value={value} onChange={setValue}></Input>
      </Form>
    </>
  )
}

export default App
