// import React from 'react'
// import './Services.css'
// import Image1 from '../../assets/service-1.svg'
// import Image2 from '../../assets/service-2.svg'
// import Image3 from '../../assets/service-3.svg'

// const data = [
//   {
//     id: 2,
//     image: Image2,
//     title: "Front End Development",
//     description:
//       "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
//   },
//   {
//     id: 1,
//     image: Image1,
//     title: "UI/UX design",
//     description:
//       "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
//   },
 
//   {
//     id: 3,
//     image: Image3,
//     title: "Problem Solving",
//     description:
//       "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
//   },
// ];


// const Services = () => {
//   return (
//     <section className="services container section" id='services'>

//       <h2 className="section__title">Services</h2>
//       <div className="services__container grid">
//         { 
//         data.map((data)=>{
//           const {id, image, title, description} = data;
//           return(
//             <div className="services__card" key={id}>
//               <img src={image} alt="" className="services__img" />
//               <h3 className="services__title">{title}</h3>
//               <p className="services__description">{description}</p>
//             </div>
//           )
//         })}
//       </div>
//     </section>
    
//   )
// }

// export default Services