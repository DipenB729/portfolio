
import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
const Contact=()=>{
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  
    console.log("Sending email with values:", {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    });
  
    emailjs
      .sendForm('service_kq9ujxi', 'template_w8ekkp4', form.current, 'wJYt_9SXI0ek7cW2b')
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          alert('SUCCESS! Email has been sent.');
          e.target.reset();
        },
        (error) => {
          console.error('Failed to send email:', error);
          alert('FAILED to send email. Check console for details.');
        }
      );
  };
  
  return(
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
           <AiOutlineMail className='contact__option-icon'/>
            <h2>Email</h2>
            <h5>dipendrabelbase1346@gmail.com</h5>
            <a href="mailto:dipendrabelbase1346@gmail.com" arget='_blank' >Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine  className='contact__option-icon'/>
            <h2>Messenger</h2>
            <h5>Dipen Belbase</h5>
            <a href="https://m.me/dipendra.belbase.1" target='_blank' >Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h2>WhatsApp</h2>
            <h5>+977 9761846784</h5>
            <a href="https://web.whatsapp.com/send?phone+977 9761846784" target='_blank' >Send a Message</a>
          </article>
        </div>
        {/* end of contact option */}
        <form ref={form} onSubmit={sendEmail}>
         <input type="text" name="name" placeholder="Your Full Name" required />
         <input type="email" name="email" placeholder="Your Email" required />
         <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
         <button type="submit" className="btn btn-primary">Send Message</button>
</form>

      </div>

    </section>
  )
}
export default Contact