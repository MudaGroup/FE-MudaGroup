import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './component/navbar'
import { Home, Profile } from './pages'


function App() {

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
