
import React from 'react'
import { GrCheckmark } from "react-icons/gr"
import './services.css'
const Services=()=>{
  return(
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li> 
              <GrCheckmark className='service__list-icon'/>
              <p> Understanding user needs and behaviors.</p>
            </li>
            <li> 
              <GrCheckmark className='service__list-icon'/>
              <p>Sketching layouts and structures.</p>
            </li>
            <li> 
              <GrCheckmark className='service__list-icon'/>
              <p> Interactive design mockups.</p>
            </li>
            <li> 
              <GrCheckmark className='service__list-icon'/>
              <p>Creating appealing aesthetics.</p>
            </li>
            <li> 
              <GrCheckmark className='service__list-icon'/>
              <p>Refining designs with feedback.</p>
            </li>
          </ul>
        </article>
        {/* end of ui ux */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li> 
              <GrCheckmark className='service__list-icon'/>
              <p>Responsive and tailored designs</p>
            </li>
            <li> 
              <GrCheckmark className='service__list-icon'/>
              <p>Custom dynamic solutions.</p>
            </li>
            <li> 
              <GrCheckmark className='service__list-icon'/>
              <p>Building or customizing platforms like WordPress.</p>
            </li>
            <li> 
              <GrCheckmark className='service__list-icon'/>
              <p>Designing, implementing, and maintaining databases.</p>
            </li>
            <li> 
              <GrCheckmark className='service__list-icon'/>
              <p> Server-side logic and APIs..</p>
            </li>
            <li> 
              <GrCheckmark className='service__list-icon'/>
              <p>  Design and management.</p>
            </li>
          </ul>
        </article>
        {/* end of Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li> 
              <GrCheckmark className='service__list-icon'/>
              <p>Crafting articles, blogs, and web copy.</p>
            </li>
            <li> 
              <GrCheckmark className='service__list-icon'/>
              <p>Scriptwriting, shooting, and editing videos.</p>
            </li>
            <li> 
              <GrCheckmark className='service__list-icon'/>
              <p> Writing content with keywords for search engines.</p>
            </li>
            <li> 
              <GrCheckmark className='service__list-icon'/>
              <p>Planning and organizing content goals.</p>
            </li>
            <li> 
              <GrCheckmark className='service__list-icon'/>
              <p> Writing newsletters and promotional emails.</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}
export default Services