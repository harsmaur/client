import React from 'react'
import './Testimonials.css'

import Tdata from './Tdata';

// Import Swiper React components
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (


    <section className="testimonials container section">

      <h2 className="section__title">Clients & Reviews</h2>

      <Swiper className="testimonials__container grid"
         modules={[ Pagination]}
      spaceBetween={30}
      slidesPerView={1}
     loop={true}
     grabCursor={true}
      pagination={{ clickable: true }}
     >

        {Tdata.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonials__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">
                {comment}
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials