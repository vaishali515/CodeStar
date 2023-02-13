import {useRef} from 'react';
import React from "react";
import emailjs from '@emailjs/browser';
import {useState} from 'react';

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jx78nhc', 'template_drylsrm', form.current, 'Fj3AcR8F4bIT75H-E')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
   const [text,setText] = useState('');
      const onInputChange=(event) => {
        console.log(event.target.value);
        setText(event.target.value);
      }

  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form ref= {form}  onSubmit = {sendEmail}>
          <div>
            <label>Name</label>
            <input type="text"  required placeholder="Abc"  onChange = {onInputChange} name='name' />
          </div>

          <div>
            <label>Email</label>
            <input type="email" required placeholder="Abc@xyz.com" onChange = {onInputChange} name='email' />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about your query..."
              onChange = {onInputChange}
              name ='Description'
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact