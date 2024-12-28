
import React from 'react'
import { IoHomeOutline } from "react-icons/io5"
import { CiUser } from "react-icons/ci";
import { LuBookMinus } from "react-icons/lu";
import { RiServiceLine } from "react-icons/ri";
import { LuMessageSquareText } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";
import './nav.css'
import{useState} from 'react'
const Nav=()=>{
  const[activeNav,setActiveNav]=useState('')
  return(
    
    <nav>
      <a href="#"onClick={()=>setActiveNav('#')}  className={activeNav==='#' ? 'active' :''}><IoHomeOutline/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' :''} ><CiUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' :''}><LuBookMinus/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==='#services' ? 'active' :''}>< RiServiceLine/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active' :''}>< GrProjects/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' :''}><LuMessageSquareText/></a>
    </nav>
   
  )
}
export default Nav