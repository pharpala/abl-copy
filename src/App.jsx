import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Events from './components/Events/Events'
import Title from './components/Title/Title'
import About from './pages/About/About'
import Team from './pages/About/Team'

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

const Aboutus = () => {
  return (
    <div className='container'>
      <About />
    </div>
  )
}


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
    </Router>
  )
}

export default App
