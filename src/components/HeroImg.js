import "./HeroImgStyles.css"

import React from 'react'
import IntroImg from "../assets/QQ.jpg"
import {Link} from "react-router-dom"
import logo from "../assets/OC_Logo.png"

const HeroImg = () => {
  return (
    <div className = "hero">
        <div className="mask">
            <img className= "intro-img" src = {IntroImg} alt="IntroImg"/>
        </div>
        <div className="content" >
            <img className= "logo" src = {logo} alt="logo"/>
            <p>
                Hi, name is Olivia:
            </p>
            <h1>
                Welcome to My Website!
            </h1>
            <div>
                <Link to="/about" className="btn">About</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>

    </div>
  )
}

export default HeroImg