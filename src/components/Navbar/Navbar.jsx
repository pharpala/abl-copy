import React from 'react'
import './Navbar.css'
import logo from '../../assets/cepssc-navbar.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="logo" className='logo'/>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Events</li>
            <li>Forms & Documents</li>
            <li> <button className='btn'> Contact us </button></li>
        </ul>
    </nav>
  )
}

export default Navbar
