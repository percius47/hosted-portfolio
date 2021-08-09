import React from 'react'
import "./Footer.css"
import {FaGithub, FaTwitter,FaLinkedinIn} from "react-icons/fa"
function Footer() {
    return (
        <div className="footer">
            <div className="wrapper">
                <span className="copyright">Copyright.© 2021 Made with <span>React</span> . 
                 </span>

                <div className="social" >
              
            
                <a href="https://github.com/percius47" className="git">
                
                <FaGithub />
                </a>
           
                <a className="twitter" href="https://twitter.com/percius25">
               <FaTwitter />
               </a>
               <a href="https://linkedin.com/in/prashantworks47" className="linked">
               <FaLinkedinIn /> 
               </a>
               
                
                </div>
            </div>
            
        </div>
    )
}

export default Footer
