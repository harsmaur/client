import React from 'react'
import './Contact.css'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

  const notify = () => toast.success('Message Sent!', {
    position: "top-right",
    autoClose: 1300,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light", 
    });

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_89r5wte", 'template_z77qvcn', form.current, 'hRHGRrBCJa6ODl0hX')
      .then((result) => {
        notify()
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (

    <section className="contact container section" id="contact">

      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container grid">
         <div className="contact__info">
          <h3 className="contact title">Send me a message</h3>
          
         </div>
         <form action="" className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="contact__form-group">


            <div className="contact__form-div">
              <input type="text" name='user_name' className="contact__form-input" placeholder='Insert your name' required/>
            </div>

            <div className="contact__form-div">
              <input type="email" name='user_email' className="contact__form-input" placeholder='Insert your email' required/>
            </div>



          </div>

           <div className="contact__form-div">
              <input type="text" className="contact__form-input" name='user_subject' placeholder='Insert your Subject' required/>
            </div>
   
            <div className="contact__form-div  contact__form-area">
             <textarea  id="" cols="30" rows="10" name='message' className='contact__form-input' placeholder='Write Your Message' required></textarea>
            </div>
            
            <button className="btn" value='Send'>Send Meassage</button>
         </form>
      </div>
      <ToastContainer />
    </section>

  )
}

export default Contact