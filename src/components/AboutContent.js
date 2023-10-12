import "./AboutContentStyles.css";
import pfp from "../assets/pfp.png"
import interests from "../assets/interests.png"
import React from 'react'
import {Link} from "react-router-dom";
const AboutContent = () => {
  return (
    <div className ="about">
        <div className="left">
            <h1> Meet Olivia</h1>
            <p> How's it going? 👋 I am a student at the University of Waterloo and
                Wilfrid Laurier University pursuing a double-degree in Computer Science
                and Business Administration. My ultimate career goal is to leverage my
                business knowledge to create technological solutions that make a positive social impact.
            </p>
            <p>
                I believe that businesses give technology purpose but also that technology helps to make great
                businesses. So whether it's in a developer, consulting, or management capacity I believe my skills
                can help take any business or their technology to the next level!
            </p>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeQq27ZEb4DwURKKOWKDR64OVYZqLtV4JApbRzF3h488CiqVw/viewform">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
            <img src = {pfp} className= "img" alt="pfp" />
            </div>
        </div>
        <div className= "interests">
          <div className="left">
              <div className="img-container">
                <img src = {interests} className= "img" alt="interests" />
              </div>
          </div>
          <div className="right">
              <h1> Interests:</h1>
              <p> - Anything food related: eating, cooking, baking</p>
              <p> - Board games</p>
              <p> - Watching TV and movies</p>
              <p> - Visual arts (Digital/traditional arts, embroidery, pressing flowers)</p>
              <p> - Anything and everything related to music (instruments, broadway shows, various genres)</p>
          </div>
        </div>
    </div>
    
  )
}

export default AboutContent