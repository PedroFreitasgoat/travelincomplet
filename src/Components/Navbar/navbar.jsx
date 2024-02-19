import React from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { IoIosCloseCircle } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";



const Navbar = () => {
  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><MdOutlineTravelExplore className="icon"/>Travel.</h1>
          </a>
        </div>

    <div className="navBar">
      <ul className="navList flex">
        <li className="navItem">
          <a href="#" className="navLink">Home</a>
        </li>

        <li className="navItem">
          <a href="#" className="navLink">Packges</a>
        </li>

        <li className="navItem">
          <a href="#" className="navLink">Shop</a>
        </li>

        <li className="navItem">
          <a href="#" className="navLink">About</a>
        </li>
        
        <li className="navItem">
          <a href="#" className="navLink">Pages</a>
        </li>

        <li className="navItem">
          <a href="#" className="navLink">News</a>
        </li>

        <li className="navItem">
          <a href="#" className="navLink">Contact</a>
        </li>

        <button className='btn'>
          <a href="#">BOOK NOW</a>
        </button>
      </ul>

      <div className="closeNavBar">
      <IoIosCloseCircle  className="icon"/>
      </div>
    </div>

      <div className="toggleNabar">
      <PiDotsNineBold className="icons" />
      </div>
      </header>
    </section>
  )
}

export default Navbar
