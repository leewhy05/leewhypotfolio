import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar'
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Projects from './pages/Projects';




function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<><Navbar/><Home/></>}/>
      <Route path='/Contacts' element={<Contacts/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

