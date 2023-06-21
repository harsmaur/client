import React from 'react'
import './Pricing.css'
import image1 from '../../assets/icons8-html (1).svg'
import image2 from '../../assets/icons8-css3-144.png'
import image3 from '../../assets/icons8-javascript.svg'
import image4 from '../../assets/icons8-bootstrap.svg'
import image5 from '../../assets/icons8-react.svg'
import image6 from '../../assets/icons8-nodejs.svg'
import image7 from '../../assets/icons8-express-js.svg'
import image8 from '../../assets/mongodb.svg'
import image9 from '../../assets/icons8-c (1).svg'
import image10 from '../../assets/icons8-python.svg'

const Pricing = () => {
  return (
    
    <section className="pricing container section" id=''>
        
        <h2 className="section__title">My Stack</h2>

        <div className="pricing__container grid">
            
            <div className="pricing__item">
              <img src={image1} alt="" className="pricing__img" />
             
             
            </div>

            <div className="pricing__item ">
              <img src={image2} alt="" className="pricing__img" />
            </div>

            <div className="pricing__item">
              <img src={image3} alt="" className="pricing__img" />
            </div>

            <div className="pricing__item">
              <img src={image4} alt="" className="pricing__img" />
            </div>


            <div className="pricing__item">
              <img src={image5} alt="" className="pricing__img" />
            </div>

            <div className="pricing__item">
              <img src={image6} alt="" className="pricing__img" />
            </div>

            <div className="pricing__item">
              <img src={image7} alt="" className="pricing__img" />
            </div>

            <div className="pricing__item">
              <img src={image8} alt="" className="pricing__img" />
            </div>

            <div className="pricing__item">
              <img src={image9} alt="" className="pricing__img" />
            </div>

            <div className="pricing__item">
              <img src={image10} alt="" className="pricing__img" />
            </div>
        </div>

    </section>
  )
}

export default Pricing