import React from 'react'
import './footer.css'
import {ImGithub} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'

const footer = () => {
    return (
        <footer>
            <a href='#' className='footer_name'>John Ekunola</a>

            <ul className='footer_links'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer_socials'>
                <a href='https://www.linkedin.com/in/ekunolajohn/' target='_blank'><FaLinkedin /></a>
                <a href='https://github.com/Jizzyjay' target='_blank'><ImGithub /></a>
                <a href='https://twitter.com/jizzy_jay423' target='_blank'><BsTwitter /></a>
            </div>

            <div className='footer_copyright'>
                <small> &copy; 2022 - John Ekunola</small>
            </div>
        </footer>
    )
}

export default footer