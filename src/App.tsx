import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Personal from './pages/Personal/Personal'
import Login from './pages/Login/Login'
import Registration from './pages/Registration/Registrtion'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  )
}

export default App
