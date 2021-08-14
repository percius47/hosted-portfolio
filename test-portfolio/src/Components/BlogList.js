import React from 'react'
import  "./BlogList.css"
import {FaAngleUp } from "react-icons/fa"
import {animateScroll as scroll} from "react-scroll";

const projects=[
    {
        title: "React JS: What has it got to offer?",
        date: "1st August 2021",
        description:"A short read to give the basic idea about the differences and if React is worth the shift.",
        read: "https://prashantxwrites.hashnode.dev/react-and-vanilla-the-journey"
    },
    {
        title: "Responsive Designs 101!",
        date: "31st July 2021",
        description:"Responsive Designs: A short blog for a cleaner CSS design and demystifying the scary media queries.",
        read:"https://prashantxwrites.hashnode.dev/responsive-designs-a-short-blog-for-a-cleaner-css-design"

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
                            <a href={item.read} target="_blank" rel="noreferrer noopener" className="liveProjectB">Read</a>
                           
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
