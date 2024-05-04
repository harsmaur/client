import React from 'react'
import './Home.css'
import Me from '../../assets/avatar-1.svg'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <section className="home container " id='home'>

      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Harsh Maurya</h1>

        <span className="home__education">
        <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
   
    "Undergrad at MITS",
    "A Passionate MERN Developer.",
    1000,
    '',
    1000
    
    
  ]}
  speed={50}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/></span>

        <HeaderSocials />
        <a href="#contact" className=" btn">Contact Me</a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default Home