import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
import logo from '../../assets/cepssc-navbar.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/'

  return (
    <nav className={`container ${(isHomePage && !sticky) ? '' : 'dark-nav'}`}>
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
