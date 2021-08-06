import React from 'react'
import  "./ProjectList.css"
import {FaAngleUp } from "react-icons/fa"
import {animateScroll as scroll} from "react-scroll";

const projects=[
    {
        title: "Project 1",
        date: "6th August 2021",
        description:"Created this app in MERN stack, used own component library for CSS. Core features include Cart and Wishlist Management, PayPal sandboxing for payment, apply coupon feature, address management, search/filter/sort functionality, JWT based Authentication"

    },
    {
        title: "Project 2",
        date: "6th August 2021",
        description:"Created this app in MERN stack, used own component library for CSS. Core features include Cart and Wishlist Management, PayPal sandboxing for payment, apply coupon feature, address management, search/filter/sort functionality, JWT based Authentication"

    },
    {
        title: "Project 3",
        date: "6th August 2021",
        description:"Created this app in MERN stack, used own component library for CSS. Core features include Cart and Wishlist Management, PayPal sandboxing for payment, apply coupon feature, address management, search/filter/sort functionality, JWT based Authentication"

    },
    {
        title: "Project 4",
        date: "6th August 2021",
        description:"Created this app in MERN stack, used own component library for CSS. Core features include Cart and Wishlist Management, PayPal sandboxing for payment, apply coupon feature, address management, search/filter/sort functionality, JWT based Authentication"

    },
    {
        title: "Project 5",
        date: "6th August 2021",
        description:"Created this app in MERN stack, used own component library for CSS. Core features include Cart and Wishlist Management, PayPal sandboxing for payment, apply coupon feature, address management, search/filter/sort functionality, JWT based Authentication"

    },
    {
        title: "Project 6",
        date: "6th August 2021",
        description:"Created this app in MERN stack, used own component library for CSS. Core features include Cart and Wishlist Management, PayPal sandboxing for payment, apply coupon feature, address management, search/filter/sort functionality, JWT based Authentication"

    }
];

function ProjectList() {
function goTop(){
    scroll.scrollToTop();

}


    return (
        
        <div className="projectList">
            <h1>Projects</h1>
            <h3>This is my web development journey from basic CLI apps to a Full-Stack Application. </h3>
            <div className="listParent">
                {projects.map(function (item,index){
                        return(
                            <div className="listCard">
                            <h4 className="title">{item.title}</h4>
                            <small>{item.date}</small>
                            <p>{item.description}</p>
                            <a href="/" className="liveProject">View Live</a>
                            <a href="/" className="codeProject">View Source</a>
                        </div>
                        );
                })}

                
            </div>
            <div className="top"
            onClick={goTop}
            >
            
            <FaAngleUp/>
            <span>Top</span>
            </div>

        </div>
    )
}

export default ProjectList
