
import './App.css'
import Numbers from './components/Numbers'
import ProductPage from './components/ProductPage'
import ProfilePage from './components/ProfilePage'
import SelectItem from './components/SelectItem'
import TypeFullName from './components/TypeFullname'

function App() {
  return (
    <>
      <TypeFullName>Cập nhật trạng thái dựa trên props hoặc state</TypeFullName>
      <Numbers>Lưu trữ các phép tính tốn kém bằng cách sử dụng useMemo</Numbers>
      <ProfilePage>Khôi phục toàn bộ trạng thái khi một thuộc tính thay đổi.</ProfilePage>
      <SelectItem>Điều chỉnh một số trạng thái khi một thuộc tính thay đổi.</SelectItem>
      <ProductPage>Sử dụng Effect để load dữ liệu</ProductPage>
    </>
  )
}

export default App
