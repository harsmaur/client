import React from 'react'
import './Pricing.css'
import image1 from '../../assets/price-1.svg'
import image2 from '../../assets/price-2.svg'
import image3 from '../../assets/price-3.svg'
const Pricing = () => {
  return (
    
    <section className="pricing container section">
        
        <h2 className="section__title">Pricing Plans</h2>

        <div className="pricing__container grid">
            
            <div className="pricing__item">
              <img src={image1} alt="" className="pricing__img" />
              <h3 className="pricing__plan">lorem</h3>
              <p className="pricing__title">Lorem, ipsum.</p>
              <h3 className="price">
                <em>$</em> - <span>month</span>
              </h3>
              <a href="" className="btn">Get Started</a>
            </div>

            <div className="pricing__item best">
              <span className="badge">Recommended</span>
              <img src={image2} alt="" className="pricing__img" />
              <h3 className="pricing__plan">lorem</h3>
              <p className="pricing__title">Lorem, ipsum.</p>
              <h3 className="price">
                <em>$</em> - <span>month</span>
              </h3>
              <a href="" className="btn">Get Started</a>
            </div>


            <div className="pricing__item">
              <img src={image3} alt="" className="pricing__img" />
              <h3 className="pricing__plan">lorem</h3>
              <p className="pricing__title">Lorem, ipsum.</p>
              <h3 className="price">
                <em>$</em> - <span>month</span>
              </h3>
              <a href="" className="btn">Get Started</a>
            </div>
        </div>

    </section>
  )
}

export default Pricing