import React from 'react'

const AboutBox = () => {
  return (

    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div className="">
                <h3 className="about__title">25+</h3>
                <span className="about__subtitle">Projects Completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div className="">
                <h3 className="about__title">1</h3>
                <span className="about__subtitle">Hackathon</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"></i>

            <div className="">
                <h3 className="about__title">Lorem, ipsum</h3>
                <span className="about__subtitle">Lorem, ipsum.</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-pencil"></i>

            <div className="">
                <h3 className="about__title">Lorem, ipsum</h3>
                <span className="about__subtitle">Lorem, ipsum.</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox