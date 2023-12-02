import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Character, Home } from './pages'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <header>
        <Navbar />        
      </header>
      <Routes>
        <Route path='/' element={<Home/>} >
          <Route path='detail' element={<Character/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
