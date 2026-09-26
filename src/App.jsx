import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Partner from './pages/Partner'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Stages from './pages/Stages'
import Home from './pages/Home'
import JoinUs from './pages/JoinUs'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='partners' element={<Partner/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='stages' element={<Stages/>}/>
      <Route path='joinUs' element={<JoinUs/>}/>
    </Routes>
    </>

  )
}

export default App