import React from 'react'
import './header.css'
import CTA from './CTA'
import John from '../../assets/john.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
    return (
        <header>
        <div className= "container header_container">
            <h5>Hello I'm</h5>
            <h1>John Ekunola</h1>
            <h5 className = "text-light">Frontend Developer</h5>
            <CTA />
            <HeaderSocials />

            <div className="john">
            <img src={John} alt="John Ekunola" />
            </div>

            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
        </header>
    )
}

export default header