import React from 'react'
import "./Blogs.css";
import { NavLink} from 'react-router-dom';
function Blogs() {
    return (
        <div className="blog">
             <h2>My <span>Blogs</span> </h2>
            <div className="cardParentB">

                <div className="cardB">
                <h3>Array of Objects in JavaScript is not scary at all!</h3>
                {/* <small>31st July 2021</small> */}
                <p>Coming Soon!</p>
                <div className="codeB">
                    <a href="https://hashnode.com/@PrashantWrites" className="liveB">Visit Blogger</a>
                  
                </div>

                </div>

                <div className="cardB">

                <h3>React JS: What has it got to offer?</h3>
                <small>1st August 2021</small>
                <p>A short read to give the basic idea about the differences and if React is worth the shift.</p>
                <div className="codeB">
                    <a href="https://prashantxwrites.hashnode.dev/react-and-vanilla-the-journey" className="liveB">Read</a>
                  
                </div>


                </div>
    
                <div className="cardB">

                <h3>Responsive Designs 101!</h3>
                <small>31st July 2021</small>
                <p>Responsive Designs: A short blog for a cleaner CSS design and demystifying the scary media queries.</p>
               
                <div className="codeB">
                    <a href="https://prashantxwrites.hashnode.dev/responsive-designs-a-short-blog-for-a-cleaner-css-design" className="liveB">Read</a>
                  
                </div>

                </div>
                {/* C3 */}
               
                
            </div>
            {/* Cardparent End */}
            <NavLink exact to="/blogs" className="viewB">View All</NavLink>
           
          

        </div>
    )
}

export default Blogs
