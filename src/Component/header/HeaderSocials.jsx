import React from 'react'
import { FaLinkedin } from "react-icons/fa6"
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa";
const HeaderSocials =()=>{
    return(
    <div className="header__socials">
    <a href="https://www.linkedin.com/in/dil-bahadur-belbase-a39555237/ " target="_blank" ><FaLinkedin/></a>
    <a href="https://github.com/DipenB729" target="_blank"><FaGithubSquare/></a>
    <a href=" https://www.instagram.com/" target="_blank"><FaSquareInstagram /></a>
    <a href="https://www.facebook.com/" target="_blank" ><FaFacebookSquare/></a>
   
    </div>

    )
}
export default HeaderSocials