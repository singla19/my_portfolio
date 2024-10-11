import React, { useRef } from 'react';
import './Contacts.css';
import { MdOutlineEmail } from 'react-icons/md';

const Contacts = () => {
  const form = useRef();

  return (
    <section id='contacts'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>bhavaysingla2006@gmail.com</h5>
            <a href="mailto:bhavaysingla2006@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name='email' placeholder='Your Email' required /> 
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>    
    </section>
  );
};

export default Contacts;
