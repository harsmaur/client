import React from 'react'
import './Blog.css'

import BlogData from './BlogData';



const Blog = () => {
  return (

    <section className="blog container section" id="blog">

      <h2 className="section__title">Latest Posts</h2>
      <div className="blog__container grid">
        {BlogData.map(({ id, title, image, link, category, date }) => {
          return (
            <div className="blog__card" key={id}>
              <div className="blog__thumb">
                <a href={link} ><span className="blog__category">{category}</span></a>
                <a href={link}><img src={image} alt="" className="blog__img" /></a>
              </div>
              <div className="blog__details">
                <h3 className="blog__title">{title}</h3>
                <div className="blog__meta">
                  <span className="blog__dot">.</span>
                  <span>{date}</span>
                </div>
              </div>
            </div>
          )
        })}


      </div>
    </section>

  )
}

export default Blog