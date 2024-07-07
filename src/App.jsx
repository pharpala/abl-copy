import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Events from './components/Events/Events'
import Title from './components/Title/Title'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import './index.css'
import Footer from './components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <Title subtitle='Next Events' title='Check out our upcoming events!'/>
        <Events/>
      </div>
    </div>
  )
}

const About_us = () => {
  return (
    <div className='container'>
      <About />
    </div>
  )
}

const Contact_us = () => {
  return (
    <div className='container' style={{ margin: '140px' }}>
      <Title subtitle='Contact Us' title='Get in Touch'/>
      <Contact />
    </div>
  )
}


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About_us />} />
        <Route path="/contact" element={<Contact_us />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
