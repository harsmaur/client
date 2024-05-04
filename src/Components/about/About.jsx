import React from 'react'
import './About.css';
import aboutimg from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox';

const About = () => {
  
  return (
    <section className="about container section" id='about'>

      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={aboutimg} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">

            <p className="about__description">Hello, I'm Harsh Maurya, currently in my third year of pursuing a Bachelor's in Computer Science. With a strong foundation in programming, I specialize in C++ and object-oriented programming principles and  MERN stack Development. Solving problems in tech.I am a ML enthusiast exploring the world of AI and machine Learning</p>

            <a href="HarshResume1.pdf" download='HarshResume1.pdf' className="btn">Download Resume</a>
          </div>

          <div className="about__skills grid">
          
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Web Development uisng MERN</h3>
                  {/* <span className="skills__number">90%</span> */}
                </div>
                
                 {/* <div className="skills__bar">
                  <span className="skills__percentage development"></span>
                 </div> */}
              </div>


              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Problem Solving</h3>
                  {/* <span className="skills__number ">40%</span> */}
                </div>
                
                 {/* <div className="skills__bar">
                  <span className="skills__percentage psolving"></span>
                 </div> */}
              </div>


              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Exploring</h3>
                  {/* <span className="skills__number">60%</span> */}
                </div>
                
                 {/* <div className="skills__bar">
                  <span className="skills__percentage ui__design"></span>
                 </div> */}
              </div>



          </div>
        </div>
      </div>
      <AboutBox/>
    </section>
  )
}

export default About