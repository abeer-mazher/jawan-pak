import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Main from './components/Main'
import About from './components/About'
import Info from './components/Info'
import Courses from './components/Courses'
import Contacts from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header/>
    <Main/>
    <About/>
    <Info/>
    <Courses/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default App
