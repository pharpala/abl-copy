import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../assets/cepssc-navbar.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="logo" className='logo'/>
        <ul>
            <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/forms-documents">Forms & Documents</Link></li>
        <li><Link to="/contact" className='btn'>Contact us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
