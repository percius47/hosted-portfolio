import React, { useState } from 'react'
import Sk1 from "../images/sk1.png"
import Sk2 from "../images/sk2.png"
import Sk3 from "../images/sk3.png"
import Sk4 from "../images/sk4.png"
import Sk5 from "../images/sk5.png"
import Sk6 from "../images/sk6.png"
import Sk7 from "../images/sk7.png"
import Sk8 from "../images/sk8.png"
import Sk9 from "../images/sk9.png"
import Sk10 from "../images/sk10.png"
import "./Skills.css"
import {animateScroll as scroll} from "react-scroll";
import {FaAngleUp } from "react-icons/fa"
const obj1=[
    {
        image: Sk1,
        caption: "Javascript"
    },
    {
        image: Sk2,
        caption: "React"
    },
    {
        image: Sk3,
        caption: "Redux"
    },
    {
        image: Sk4,
        caption: "Tailwind"
    },
    {
        image: Sk5,
        caption: "Firebase"
    },
    {
        image: Sk6,
        caption: "Node"
    },
    {
        image: Sk7,
        caption: "Github"
    },
    {
        image: Sk8,
        caption: "Git"
    },
    {
        image: Sk9,
        caption: "HTML 5"
    },
    {
        image: Sk10,
        caption: "CSS 3"
    },
    
];
var limit=5;
function Skills() {
    const [more,setMore]=useState("none");
    const [btnDisp,setBtnDisp]=useState("All");
    
    function goTop(){
        scroll.scrollToTop();
    }
    function clickHandler(){
        if(more==="none")
        {
        setMore("grid");
        setBtnDisp("Less");
        limit=obj1.length;
    }
        else
        {
        setMore("none");
        setBtnDisp("All")
        limit=5;
        }

    }
    return (
        <div className="skills">
             <h2>My <span>Skills</span></h2>
             <div className="skillParent">
                                    
                  {obj1.map(function (item,index){
                      if(index<limit)
                      {
                     return(
                         
                        <div className="skillCard">
                      <img src={item.image} alt="JavaScript" className="icon"/> 
                     <h3 className="caption">{item.caption}</h3>
                 </div>
                          
                      );
                     }
                  }

                  )}                
                   </div> 
                 <button className="btnMore"
                 onClick={   clickHandler }
                 >View {btnDisp}</button>
               
            <div className="top"
            onClick={goTop}
            >
            
            <FaAngleUp/>
            <span>Top</span>
            </div>
            
        </div>
    )
}

export default Skills
