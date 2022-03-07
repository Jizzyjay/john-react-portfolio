import React from 'react'
import './project.css'
import Robo from '../../assets/roboapp.png'
import Jay from '../../assets/jaybakery.png'
import Todo from '../../assets/todo.png'
import Background from '../../assets/background.png'

const project = () => {
    return (
        <section id='project'>
            <h5>My Recent Works</h5>
            <h2>Projects</h2>

            <div className='container project_container'>
            <article className='project_item'>
                <div className='project_item-image'></div>
                <h3>Roboapp</h3>
                <div className='project_item-cta'>
                    <a href='https://github.com/Jizzyjay/roboapp' className='btn'>Github</a>
                    <a href='https://robopp.netlify.app/' className='btn btn-primary'>Live Demo </a>
                </div>
                <img src={Robo} alt="Robo app" />
                <h3>Roboapp is a robot app, where robots are generated with an API.</h3>
            </article>

            <article className='project_item'>
                <div className='project_item-img'></div>
                <h3>Jay Bakery</h3>
                <div className='project_item-cta'>
                    <a href='https://github.com/Jizzyjay/Jay-Bakery' className='btn'>Github</a>
                    <a href='https://jaybakery.netlify.app/' className='btn btn-primary'>Live Demo</a>
                </div>
                <img src={Jay} alt="Jay img" />
                <h4>Jay Bakery landing page shows the products, price, location and services offered by them.</h4>
            </article>

            <article className='project_item'>
                <div className='project_item-image'></div>
                <h3>Todo App</h3>
                <a href='https://github.com/Jizzyjay/To-do-App' className='btn'>Github</a>
                <a href='https://todooaapp.netlify.app/' className='btn btn-primary'>Live Demo</a>
                <img src={Todo} alt="Todo" />
                <h4>ToDo App is designed to keep track and maintain our day-to-day tasks or list everything that we have to do. It's helpful in planning our daily schedules. We can add more tasks at any time and delete a task that is completed.</h4>
            </article>


            <article className='project_item'>
                <div className='project_item-image'></div>
                <h3>Background Gradient</h3>
                <div className='project_item-cta'>
                    <a href='https://github.com/Jizzyjay/Jay-Bakery' className='btn'>Github</a>
                    <a href='https://jaybakery.netlify.app/' className='btn btn-primary'>Live Demo</a>
                </div>
                <img src={Background} alt="Jay" />
                <h4>This color gradient specifies a range of position-dependent colors. The colors produced by a gradient vary continuously with position, producing smooth color transitions.</h4>
            </article>
            {/*
            <article className='project_item'>
                <div className='project_item-image'></div>
                <h3>Jay Bakery</h3>
                <div className='project_item-cta'>
                    <a href='https://github.com/Jizzyjay/Jay-Bakery' className='btn'>Github</a>
                    <a href='https://jaybakery.netlify.app/' className='btn btn-primary'>Live Demo</a>
                </div>
                <img src={Jay} alt="Jay" />
                <h4>Jay Bakery landing page shows the products, price, location and services offered by them.</h4>
            </article>
            */}
            </div>
        </section>
    )
}

export default project