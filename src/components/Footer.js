import "./FooterStyles.css"
import { FaLocationDot, FaLinkedin } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <p1>Thank you for checking out my website!</p1>
                <p1>Feel free to connect and chat!</p1>
                <div className="location">
                    <h4>
                    <FaLocationDot size={20} style={{color: "#fff", marginRight: "2rem"}} />
                        Toronto, Canada
                    </h4>
                </div> 
                <div className="phone">
                    <h4>
                        <BsTelephoneFill size={20} style={{color: "#fff", marginRight: "2rem"}} />
                        (+1) 416-371-6041
                    </h4>
                </div>
                
            </div>
            <div className="right">
                <div className="email">
                        <h4>
                            <TbMailFilled size={20} style={{color: "#fff", marginRight: "2rem"}} />
                            oliviachan.otyc@gmail.com
                        </h4>
                    </div>
                    <div className="linkedin">
                        <h4>
                            <FaLinkedin size={20} style={{color: "#fff", marginRight: "2rem"}} />
                            Olivia Chan
                        </h4>
                    </div>
                </div>
        </div>

    </div>
    
  )
}

export default Footer


