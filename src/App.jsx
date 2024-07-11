import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Events from './Components/Events/Events'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
        <Programs/>
        <About/>
        <Title subTitle='Events' title='Campus Photos'/>
        <Events/>
        <Title subTitle='Clubs' title='Explore The Interest'/>
      </div>
      
    </div>
  )
}

export default App
