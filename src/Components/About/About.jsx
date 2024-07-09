import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with our university's comprehensive education program. Our cutting-edge curriculum is designed to empower students with the knowledge, skills</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis recusandae veritatis aliquam at et, facere asperiores cumque cum, quas eum provident delectus inventore eveniet necessitatibus nulla dolores quasi expedita tempore.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta facilis sapiente officiis ea repudiandae facere quidem ut laboriosam aperiam illo possimus voluptates aliquam sed veniam saepe corrupti, reiciendis illum!</p>

        </div>
    </div>
  )
}

export default About
