
import React from 'react'
import './portfolio.css'
import img1 from '../../assets/project1.jpg'
import img2 from '../../assets/project2.jpg'
import img3 from '../../assets/project3.jpg'
const Portfolio=()=>{
  return(
    <section id="portfolio">
      <h5>My Recent Project</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img3} alt="project1" />
          </div>
            <h3>HamroGadget </h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/DipenB729/HamroGadget" className='btn' target='_blank'>Github</a>
            <a href="https://hamro-gadget.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
            
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="project1" />
          </div>
            <h3>News Portal </h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/DipenB729/News-portal" className='btn' target='_blank'>Github</a>
            <a href="https://news-portal-yb7o.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img2} alt="project1" />
          </div>
            <h3>To-do List </h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/DipenB729/To-Do_list" className='btn' target='_blank'>Github</a>
            <a href="https://to-do-list-kappa-drab.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
       
      </div>
    </section>
  )
}
export default Portfolio