
import React from 'react'
import './header.css'
import ME from '../../assets/myself.jpeg'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header=()=>{
  return(
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dil Bahadur Belbase</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocials />

        <img className="me" src={ME} alt="img" />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
     </header>
  )
}
export default Header