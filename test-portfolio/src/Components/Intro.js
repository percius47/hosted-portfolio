import React from 'react'
import Hero from "../images/hero.svg"
import "./Intro.css"
function Intro() {
    return (
        <div className="introParent">
            <div className="text">

            <h1 >Hi there!</h1> 
            <h2>I'm Prashant <span>A Full Stack Developer</span>.</h2>

            <p>I am a fresher working as a Technical Associate. I started my Web Dev journey merely exploring and now I'm looking to make a full-time career out of it. </p>
            </div>
            <div className="imj">
            <img src={Hero} alt="Hero" />
            </div>
        </div>
    )
}

export default Intro
