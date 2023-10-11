import "./NavbarStyles.css"
import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { TiThMenu } from "react-icons/ti"
import { FaTimes} from "react-icons/fa"




const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false); //for the header color transition as you scroll
    const changeColor = () =>{
        if(window.scrollY >=10) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg": "header"}>
        <Link to="/"> 
        <h1>Olivia Chan</h1>
        </Link>
        <u1 className = {click ? "nav-menu active" :
                            "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeQq27ZEb4DwURKKOWKDR64OVYZqLtV4JApbRzF3h488CiqVw/viewform">Contact</Link>
            </li>
        </u1>
        <div className="hamburger" onClick= 
        {handleClick}>
            {click ? (
                <FaTimes size={27} style={{color: "#222"} }/>) : (
                <TiThMenu size={27} style={{color: "#222"}}/>)
            }
            
            
        </div>
    </div>
  )
}

export default Navbar