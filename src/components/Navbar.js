import React  from 'react'
import logo from "./images/logo.png"
import profile from "./images/profile.png"
import dropdown from "./images/dropdown.png"
import "./Navbar.css"

function Navbar() {

  return (

    <div className='navbar'>
      <img src={logo} alt="logo"></img>
      <div className='nav-items'>
        <a href="/" className='nav-item' >My Assignment</a>
        <a  href="/" className='nav-item' >Chat with Mentor</a>
        <div className="dropdown">
          <img classname="profilelogo" src={profile} alt="profile">
          </img>
          <button className='dropdown_btn '>
              ProfileName
            </button>
        
            <img className='dropdownlogo' src={dropdown} alt="dropdown_button">
               </img>
        </div>
      </div>
    </div>
  )
}

export default Navbar
