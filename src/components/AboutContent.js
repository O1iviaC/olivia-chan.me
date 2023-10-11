import "./AboutContentStyles.css";
import pfp from "../assets/pfp.png"
import React from 'react'
import {Link} from "react-router-dom";
const AboutContent = () => {
  return (
    <div className ="about">
        <div className="left">
            <h1> Meet Olivia:</h1>
            <p> Student at the University of Waterloo and Wilfrid Laurier University.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
            <img src = {pfp} className= "img" alt="pfp" />
            </div>
        </div>
    </div>
  )
}

export default AboutContent