import React from 'react'
import './project.css'
import Robo from '../../assets/roboapp.png'
import Jay from '../../assets/jaybakery.png'
// import Todo from '../../assets/todo.png'
// import Background from '../../assets/background.png'
import Tasty from '../../assets/tastydish.png'
// import FoodHub from '../../assets/9ja.png'
import Dashboard from '../../assets/dashboard.png'
import TravelX from '../../assets/travelx.png'
import LearnCode from '../../assets/LearnCode.png'
import Fudo from '..//../assets/fudo.png'
import Real from '../../assets/real.png'
import Rent from '../../assets/7fg2r.png'
import instagram from '../../assets/instagram pics.png'

const project = () => {
    return (
        <section id='project'>
            <h5>My Recent Works</h5>
            <h2>Projects</h2>
            <div className='container project_container'>
            <article className='project_item'>
                <div className='project_item-image'></div>
                <h3>Instagram Clone</h3>
                <div className='project_item-cta'>
                    <a href='https://github.com/Jizzyjay/instagram' rel="noreferrer" target='_blank' className='btn'>Github</a>
                    <a href='https://chipper-fairy-0718df.netlify.app/' rel="noreferrer" target='_blank' className='btn btn-primary'>Live Demo </a>
                </div>
                <img src={instagram} alt="Dashboard" />
                <h3>Add and delete pictures on instagram clone.</h3>
            </article>
            <article className='project_item'>
                <div className='project_item-image'></div>
                <h3>LearnCode</h3>
                <div className='project_item-cta'>
                    <a href='https://github.com/Jizzyjay/learncode' rel="noreferrer" target='_blank' className='btn'>Github</a>
                    <a href='https://learnreact1.netlify.app/' rel="noreferrer" target='_blank' className='btn btn-primary'>Live Demo </a>
                </div>
                <img src={LearnCode} alt="Dashboard" />
                <h3>LearnCode is designed to allow people learn React(using Stripe API for payment of Courses).</h3>
            </article>
            <article className='project_item'>
                <div className='project_item-image'></div>
                <h3>Fudo</h3>
                <div className='project_item-cta'>
                    <a href='https://github.com/Jizzyjay/Fudo' rel="noreferrer" target='_blank' className='btn'>Github</a>
                    <a href='https://sunny-chebakia-420a7b.netlify.app/' rel="noreferrer" target='_blank' className='btn btn-primary'>Live Demo </a>
                </div>
                <img src={Fudo} alt="fudo" />
                <h3>Fudo, search for food price and calories.</h3>
            </article>
            <article className='project_item'>
                <div className='project_item-image'></div>
                <h3>Jay Rent</h3>
                <div className='project_item-cta'>
                    <a href='https://github.com/Jizzyjay/jay-rent' rel="noreferrer" target='_blank' className='btn'>Github</a>
                    <a href='https://admirable-yeot-a56db1.netlify.app/contact' rel="noreferrer" target='_blank' className='btn btn-primary'>Live Demo </a>
                </div>
                <img src={Rent} alt="" />
                <h3>Jay Rent landing page where you cant pick and rent cars.</h3>
            </article>
            <article className='project_item'>
                <div className='project_item-image'></div>
                <h3>House Search</h3>
                <div className='project_item-cta'>
                    <a href='https://github.com/Jizzyjay/house-search' rel="noreferrer" target='_blank' className='btn'>Github</a>
                    <a href='https://famous-starlight-5b999d.netlify.app/' rel="noreferrer" target='_blank' className='btn btn-primary'>Live Demo </a>
                </div>
                <img src={Real} alt="Dashboard" />
                <h3>House Search, search price and locations of different apartment.</h3>
            </article>
            <article className='project_item'>
                <div className='project_item-image'></div>
                <h3>Dashboard</h3>
                <div className='project_item-cta'>
                    <a href='https://github.com/Jizzyjay/Dashboard' rel="noreferrer" target='_blank' className='btn'>Github</a>
                    <a href='https://johndashboaard.netlify.app/' rel="noreferrer" target='_blank' className='btn btn-primary'>Live Demo </a>
                </div>
                <img src={Dashboard} alt="Dashboard" />
                <h3>Dashboard(using Html, Css and Javascript).</h3>
            </article>
            <article className='project_item'>
                <div className='project_item-image'></div>
                <h3>TravelX</h3>
                <div className='project_item-cta'>
                    <a href='https://github.com/Jizzyjay/travelx-main' rel="noreferrer" target='_blank' className='btn'>Github</a>
                    <a href='https://travex.netlify.app/' rel="noreferrer" target='_blank' className='btn btn-primary'>Live Demo </a>
                </div>
                <img src={TravelX} alt="" />
                <h3>TravelX Landing Page(using Gatsby).</h3>
            </article>
            {/* <article className='project_item'>
                <div className='project_item-image'></div>
                <h3>9ja FoodHub</h3>
                <div className='project_item-cta'>
                    <a href='https://github.com/Jizzyjay/9ja-food' rel="noreferrer" target='_blank' className='btn'>Github</a>
                    <a href='https://9jafoodhub.netlify.app/' rel="noreferrer" target='_blank' className='btn btn-primary'>Live Demo </a>
                </div>
                <img src={FoodHub} alt="" />
                <h3>9ja FoodHub landing page. </h3>
            </article> */}
            <article className='project_item'>
                <div className='project_item-image'></div>
                <h3>Roboapp</h3>
                <div className='project_item-cta'>
                    <a href='https://github.com/Jizzyjay/roboapp' rel="noreferrer" target='_blank' className='btn'>Github</a>
                    <a href='https://robopp.netlify.app/' rel="noreferrer" target='_blank' className='btn btn-primary'>Live Demo </a>
                </div>
                <img src={Robo} alt="Robo app" />
                <h3>Roboapp is a robot app, where robots are generated with an API.</h3>
            </article>
            <article className='project_item'>
                <div className='project_item-img'></div>
                <h3>Jay Bakery</h3>
                <div className='project_item-cta'>
                    <a href='https://github.com/Jizzyjay/Jay-Bakery' rel="noreferrer" target='_blank' className='btn'>Github</a>
                    <a href='https://jaybakery.netlify.app/' rel="noreferrer" target='_blank' className='btn btn-primary'>Live Demo</a>
                </div>
                <img src={Jay} alt="Jay img" />
                <h4>Jay Bakery landing page shows the products, price, location and services offered by them.</h4>
            </article>

            {/* <article className='project_item'>
                <div className='project_item-image'></div>
                <h3>Todo App</h3>
                <a href='https://github.com/Jizzyjay/To-do-App' rel="noreferrer" target='_blank' className='btn'>Github</a>
                <a href='https://todooaapp.netlify.app/' rel="noreferrer" target='_blank' className='btn btn-primary'>Live Demo</a>
                <img src={Todo} alt="Todo" />
                <h4>ToDo App is designed to keep track and maintain our day-to-day tasks or list everything that we have to do. It's helpful in planning our daily schedules. We can add more tasks at any time and delete a task that is completed.</h4>
            </article> */}
            {/* <article className='project_item'>
                <div className='project_item-image'></div>
                <h3>Background Gradient</h3>
                <div className='project_item-cta'>
                    <a href='https://github.com/Jizzyjay/Jay-Bakery' rel="noreferrer" target='_blank' className='btn'>Github</a>
                    <a href='https://jaybakery.netlify.app/' rel="noreferrer" target='_blank' className='btn btn-primary'>Live Demo</a>
                </div>
                <img src={Background} alt="Jay" />
                <h4>This color gradient specifies a range of position-dependent colors. The colors produced by a gradient vary continuously with position, producing smooth color transitions.</h4>
            </article>   */}

            <article className='project_item'>
                <div className='project_item-image'></div>
                <h3>Tasty Dish Landing Page</h3>
                <div className='project_item-cta'>
                    <a href='https://github.com/Jizzyjay/tastyfood' className='btn' rel="noreferrer" target='_blank'>Github</a>
                    <a href='https://tastydish.netlify.app' className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
                </div>
                <img src={Tasty} alt="Tasty" />
                <h4>Tasty Dish landing page shows what the restaurant offers, the price of some of their food, location, social media links etc.</h4>
            </article> 
            </div>
        </section>
    )
}

export default project