import "./WorkCardStyles.css"
import tiptime from "../assets/tip-time.png";
import React from 'react'
import {NavLink} from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">CS-Related Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={tiptime} alt="tiptime" />
                <h2 className="project-title">Project Title</h2>
                <div className="pro-details">
                    <p>project details</p>
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard