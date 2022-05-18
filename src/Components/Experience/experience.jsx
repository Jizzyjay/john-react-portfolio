import React from 'react'
import './experience.css'
import {BsPatchCheckFill } from 'react-icons/bs'

const experience = () => {
    return (
        <section id='experience'>
            <h5>My Skills</h5>
            <h2>Experience</h2>

            <div className='container experience_container'>
                <div className='experience_front'>
                    <h3> Skills</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div><h4>HTML</h4></div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div><h4>CSS</h4></div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div><h4>Javascript</h4></div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div><h4>Bootstrap</h4></div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div><h4>Node</h4></div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div><h4>React</h4></div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div><h4>Gatsby</h4></div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div><h4>Styled-Components</h4></div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div><h4>WordPress</h4></div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div><h4>Github</h4></div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div><h4>Gitlab</h4></div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div><h4>Netlify</h4></div>
                        </article>
                    </div>
                </div>
            

                <div className='experience_skills'>
                    <h3>Other Skills</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div><h4>Communication</h4></div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div><h4>Project Management</h4></div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div><h4>Team Player</h4></div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div><h4>Interpersonal Skills</h4></div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div><h4>Time management</h4></div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div><h4>Critical Thinking</h4></div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div><h4>Problem-Solving</h4></div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default experience