import React from 'react'
import './Navbar.css'
import iitp_logo from '../../assets/iitp-logo.png'


const Navbar = () => {
  return (
    <nav className='container'>
      <img src={iitp_logo} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Clubs</li>
        <li>Events</li>
        <li>Teams</li>
        
        <li><button className='btn'>Register</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
