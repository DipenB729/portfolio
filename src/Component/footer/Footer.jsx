
import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer=()=>{
  return(
    <footer>
      <a href="#" className='footer__logo'>Dil Bahadur Belbase</a>
      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com" target='_blank'><FaFacebook /></a>
        <a href="https://Instagram.com" target='_blank'><FaInstagram/></a>
        <a href="https://Twitter.com" target='_blank'><FaXTwitter /></a>
      </div>
     <div className="footer__copyright">
      <small >&copy; Since 2003</small>
     </div>
    </footer>

  )
}
export default Footer