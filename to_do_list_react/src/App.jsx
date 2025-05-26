import './App.css'
import { useState } from 'react'
import Todoinput from './components/Todoinput'
import TodoList from './components/TodoList'
function App() {
  const [listtodo, setlisttodo] = useState([])
  let addList = (inputtext) => {
    setlisttodo([...listtodo, inputtext])
  }
  return (

    <>
      <Todoinput addList={addList}/>
      <TodoList/>
    </>
  )
}

export default App
