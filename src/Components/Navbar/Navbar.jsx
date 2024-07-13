import React, { useEffect, useState } from 'react'
import './Navbar.css'
import iitp_logo from '../../assets/iitp-logo.png'


const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
    },[])

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={iitp_logo} alt="logo" className='logo'/>
      <ul className='navbar-links'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about_us'>About us</a></li>
        <li><a href='#clubs'>Clubs</a></li>
        <li><a href='#events'>Events</a></li>
        <li><a href='#teams'>Teams</a></li>
        
        <li><button className='btn'>Register</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
