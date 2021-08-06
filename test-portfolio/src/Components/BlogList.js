import React from 'react'
import  "./BlogList.css"
import {FaAngleUp } from "react-icons/fa"
import {animateScroll as scroll} from "react-scroll";

const projects=[
    {
        title: "Blog 1",
        date: "6th August 2021",
        description:"Created this app in MERN stack, used own component library for CSS. Core features include Cart and Wishlist Management, PayPal sandboxing for payment, apply coupon feature, address management, search/filter/sort functionality, JWT based Authentication"

    },
    {
        title: "Blog 2",
        date: "6th August 2021",
        description:"Created this app in MERN stack, used own component library for CSS. Core features include Cart and Wishlist Management, PayPal sandboxing for payment, apply coupon feature, address management, search/filter/sort functionality, JWT based Authentication"

    },
    {
        title: "Blog 3",
        date: "6th August 2021",
        description:"Created this app in MERN stack, used own component library for CSS. Core features include Cart and Wishlist Management, PayPal sandboxing for payment, apply coupon feature, address management, search/filter/sort functionality, JWT based Authentication"

    },
    {
        title: "Blog 4",
        date: "6th August 2021",
        description:"Created this app in MERN stack, used own component library for CSS. Core features include Cart and Wishlist Management, PayPal sandboxing for payment, apply coupon feature, address management, search/filter/sort functionality, JWT based Authentication"

    },
    {
        title: "Blog 5",
        date: "6th August 2021",
        description:"Created this app in MERN stack, used own component library for CSS. Core features include Cart and Wishlist Management, PayPal sandboxing for payment, apply coupon feature, address management, search/filter/sort functionality, JWT based Authentication"

    },
    {
        title: "Blog 6",
        date: "6th August 2021",
        description:"Created this app in MERN stack, used own component library for CSS. Core features include Cart and Wishlist Management, PayPal sandboxing for payment, apply coupon feature, address management, search/filter/sort functionality, JWT based Authentication"

    }
];

function ProjectList() {
function goTop(){
    scroll.scrollToTop();

}


    return (
        
        <div className="blogList">
            <h1>Blogs</h1>
            <h3>This is my web development journey blogged in from basic CLI apps to a Full-Stack Application. </h3>
            <div className="listParentB">
                {projects.map(function (item,index){
                        return(
                            <div className="listCardB">
                            <h4 className="titleB">{item.title}</h4>
                            <small>{item.date}</small>
                            <p>{item.description}</p>
                            <a href="/" className="liveProjectB">Read</a>
                           
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
