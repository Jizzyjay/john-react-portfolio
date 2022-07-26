import React from 'react'
import './about.css'
import ME from '../../assets/john.jpg'
import {FaAward} from 'react-icons/fa'
import {FcFolder} from 'react-icons/fc'

const about = () => {
    return (
        <section id='about'>
            <h5>Get To Know </h5>
            <h2>About Me</h2>

            <div className='container about_container'>
                <div className='about_me'>
                    <div className='about_me-image'>
                        <img src={ME} alt="About Img"></img>
                    </div>
                </div>
                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                        <FaAward className='about_icon'/>
                        <h5>Experience</h5>
                        </article>
                        <article className='about_card'>
                        <FcFolder className='about_icon'/>
                        <h5>Projects</h5>
                        </article>
                    </div>
                        <p>Hi, My name is John Ekunola. I am a self taught Frontend Developer. I believe in continually improving myself in all aspects of life.</p>
                        <p> When not working on a project or thinking about programming, I'm most likely watching TV series on Netflix, playing games, watching Manchester United play football, having a good time with family and friends.</p>

                        <a href='https://www.canva.com/design/DAEokec5O48/zqz6GQ_lieJzvDusfxGKkw/view?utm_content=DAEokec5O48&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu' target="_blank" rel="noreferrer" className='btn btn-primary'>View Resume</a> 
                </div>
            </div>
        </section>
    )
}

export default about