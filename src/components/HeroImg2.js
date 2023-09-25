import "./HeroImg2Styles.css"
import React, {Component} from 'react'
import backImg from "../assets/Proj_hero.png"

class HeroImg2 extends Component {
  render() {
    return (
        <div className="hero-img">
            <div className="mask2">
                <img className= "backImg" src = {backImg} alt="backImg"/>
            </div>
            <div className="heading">
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
            </div>
        </div>
    )
 }
}

export default HeroImg2