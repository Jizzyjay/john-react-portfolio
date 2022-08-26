import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsTwitter} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v2qzz9t', 'template_xnhte04', form.current, 'Ls9sXw4uzGw_Jc3WC')

    e.target.reset()
};

    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2> Contact Me</h2>

            <div className='container contact_container'>
                <div className='contact_options'>
                    <article className='contact_option'>
                        <MdEmail className='contact_option-icon'/>
                        <h4>Email</h4>
                        <h5>ekunolajohn@gmail.com</h5>
                        <a href='mailto:=ekunolajohn@gmail.com' target='_blank' rel="noreferrer" className='btn btn-primary'>Send a Message</a>
                    </article>

                    <article className='contact_option'>
                        <IoLogoWhatsapp className='contact_option-icon'/>
                        <h4>WhatsApp</h4>
                        <a href='https://api.whatsapp.com/send?phone=8141153727&text=John%20Ekunola' rel="noreferrer" target='_blank' className='btn btn-primary'>Send a Message</a>
                    </article>

                    <article className='contact_option'>
                        <BsTwitter className='contact_option-icon'/>
                        <h4>Twitter</h4>
                        <a href='https://twitter.com/Oluwatosin_EJ' target='_blank' rel="noreferrer" className='btn btn-primary'>Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Full Name' required />
                    <input type='email' name='email' placeholder='Email' required />
                    <textarea name='message' rows='7' placeholder='Message' required > </textarea>
                    <button type='submit' className='btn btn-primary'>Send a Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact