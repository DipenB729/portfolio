
import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpeg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GrFolder } from "react-icons/gr";
const About=()=>{
  return(
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-image"></img>
          </div>
        </div>
        <div className="about__content">
         <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1year Working </small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>CLient</h5>
            <small>2 CLient </small>
          </article>

          <article className='about__card'>
            <GrFolder className='about__icon'/>
            <h5>Projects</h5>
            <small>5+ Completed </small>
          </article>
         </div>
         <p>
         Hi, I'm Dil Bahadur Belbase! I'm a tech enthusiast who loves coding, designing, and bringing creative ideas to life. As a Computer Science student, I enjoy working on projects that solve real-world problems and make life easier. When I'm not coding, you'll find me traveling, exploring new places, and appreciating the little joys of life.
         </p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a> 
        </div>
      </div>
    </section>
  )
}
export default About