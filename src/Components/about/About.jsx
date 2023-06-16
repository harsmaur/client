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

            <p className="about__description">Hello! I'm Harsh, a passionate Frontend Web Developer.I thrive on turning ideas into tangible digital experiences. I specialize in building responsive and visually stunning interfaces that leave a lasting impact.</p>

            <a href="" className="btn">Download Resume</a>
          </div>

          <div className="about__skills grid">

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Web Development</h3>
                  <span className="skills__number">90%</span>
                </div>
                
                 <div className="skills__bar">
                  <span className="skills__percentage development"></span>
                 </div>
              </div>


              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Problem Solving</h3>
                  <span className="skills__number ">40%</span>
                </div>
                
                 <div className="skills__bar">
                  <span className="skills__percentage psolving"></span>
                 </div>
              </div>


              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Designing</h3>
                  <span className="skills__number">60%</span>
                </div>
                
                 <div className="skills__bar">
                  <span className="skills__percentage ui__design"></span>
                 </div>
              </div>



          </div>
        </div>
      </div>
      <AboutBox/>
    </section>
  )
}

export default About