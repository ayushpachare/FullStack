import React, { useEffect, useState } from 'react'
import '../navBar/navBar.css'
import Logo from '../../assets/logo.png'
import { Link, Element } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'


const navBar = () => {

  const [sticky , setsticky] = useState(false)

 useEffect(() =>{
  window.addEventListener( 'scroll' , ()=>{
    window.scrollY > 50 ? setsticky(true) : setsticky(false)
  })
 },[]);

 const [moblieMenu , setmobileMenu] = useState(false)
 const Togglemenu = () => {
    moblieMenu ? setmobileMenu(false) : setmobileMenu(true)
 }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ""}`}>
        <img src={Logo} alt="" className='logo' />
        <ul className={moblieMenu?"":"hide-moblie-menu"}>
            <li> <Link to="hero" smooth={true} offset={0} duration ={500} > Home </Link> </li>
            <li> <Link to="programs" smooth={true} offset={-260} duration ={500} > Program </Link> </li>
            <li> <Link to="about" smooth={true} offset={-150} duration ={500} > About us </Link> </li>
            <li> <Link to="campus" smooth={true} offset={-260} duration ={500} > Campus </Link> </li>
            <li> <Link to="testimonials" smooth={true} offset={-260} duration ={500} > Testimonials </Link> </li>
            <li> <Link to="contact" smooth={true} offset={-260} duration ={500}  className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={Togglemenu}/>
    </nav>
  )
}
export default navBar

