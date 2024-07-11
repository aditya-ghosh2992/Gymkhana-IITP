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
