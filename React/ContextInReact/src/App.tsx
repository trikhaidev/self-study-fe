import Heading from './components/Heading'
import List from './components/List'
import ListItem from './components/ListItem'
import "./App.css"
function App() {

  return (
    <>
      <List>

        <ListItem>
          <Heading> Tiêu đề 1</Heading>

          <List>
            <ListItem>
              <Heading>Sub tiêu đề 1</Heading>
            </ListItem>

            <ListItem>
              <Heading>Sub tiêu đề 1</Heading>
            </ListItem>

            <List>
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
