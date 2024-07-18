import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Community from './Components/Community/Community'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Events from './Components/Events/Events'
import Clubs from './Components/Clubs/Clubs'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <About/>
      <Title subTitle='Clubs' title='Explore The Interest'/>
      <Clubs/>
        <Title subTitle='Community' title='Our Vibrant Communities'/>
        <Community/>
        <Title subTitle='Events' title='Campus Photos'/>
        <Events/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
