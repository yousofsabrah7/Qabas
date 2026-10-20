import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Partner from './pages/Partner'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Stages from './pages/Stages'
import Home from './pages/Home'
import JoinUs from './pages/JoinUs'
import HomeFooter from './components/home/HomeFooter'
import Login from "./pages/Login"
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='partners' element={<Partner />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
          <Route path='stages' element={<Stages />} />
          <Route path='joinUs' element={<JoinUs />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>


      </Routes>
    </>

  )
}

export default App