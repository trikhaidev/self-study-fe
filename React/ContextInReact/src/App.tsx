import Heading from './components/Heading'
import List from './components/List'
import ListItem from './components/ListItem'
import "./App.css"
function App() {

  return (
    <>
      <List key= 'l1'>

        <ListItem>
          <Heading> Tiêu đề 1</Heading>

          <List key= 'l2'>
            <ListItem>
              <Heading>Sub tiêu đề 1</Heading>
            </ListItem>

            <ListItem>
              <Heading>Sub tiêu đề 1</Heading>
            </ListItem>

            <List key= 'l3'>
              <ListItem>
                <Heading>Sub sub tiêu đề 1 1</Heading>

                <List>
                  <ListItem>
                    <Heading>Sub sub sub</Heading>
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </List>

        </ListItem>

        <ListItem>
          <Heading> Tiêu đề 2</Heading>
        </ListItem>
      </List>
    </>
  )
}

export default App

// - Việc truyền chilren cho các component cha cũng giống như việc gọi trực tiếp các component con ở trong function Component. Chỉ khác là 
// thay vì gọi trực tiếp (không được linh hoạt chỉnh sửa) thì với việc truyền qua children, có thể tùy biến nội dung.

// => Vì là nó giống với việc gọi trực tiếp component con bên trong function . Nên State của các component con có thể bị mất nếu thẻ bao bọc 
// nó bị thay đổi hoặc vị trí của nó bị thay đổi