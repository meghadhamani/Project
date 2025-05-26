import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/form/Login'
import Form from './components/form/Form'
import Home from './components/form/Home'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/'element={<Login/>}/>
      <Route path='/signup' element={<Form/>}/>
      <Route path='/home' element={<Home />}/>
     
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
