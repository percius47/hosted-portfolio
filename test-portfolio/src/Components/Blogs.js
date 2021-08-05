import React from 'react'
import "./Blogs.css";

function Blogs() {
    return (
        <div className="blog">
             <h2>My <span>Blogs</span> </h2>
            <div className="cardParent">

                <div className="card">
                <h3>Stock Returns</h3>
                <small>31st July 2021</small>
                <p>App Calculates your absolute and percentage profit/loss in stock transactions.</p>
                <div className="techStack">
                <h6>MERN</h6>
                <h6>Tailwind CSS</h6>
                <h6>Vanilla JS</h6>                    
                </div>
                <div className="code">
                    <a href="/" className="live">View Live</a>
                    <a href="/" className="source">View Source</a>
                </div>
                </div>

                <div className="card">

                <h3>Stock Returns</h3>
                <small>31st July 2021</small>
                <p>App Calculates your absolute and percentage profit/loss in stock transactions.</p>
                <div className="techStack">
                <h6>MERN</h6>
                <h6>Tailwind CSS</h6>
                <h6>Vanilla JS</h6>                    
                </div>
                <div className="code">
                    <a href="/" className="live">View Live</a>
                    <a href="/" className="source">View Source</a>
                </div>

                </div>
    
                <div className="card">

                <h3>Stock Returns</h3>
                <small>31st July 2021</small>
                <p>App Calculates your absolute and percentage profit/loss in stock transactions.</p>
                <div className="techStack">
                <h6>MERN</h6>
                <h6>Tailwind CSS</h6>
                <h6>Vanilla JS</h6>                    
                </div>
                <div className="code">
                    <a href="/" className="live">View Live</a>
                    <a href="/" className="source">View Source</a>
                </div>

                </div>
                {/* C3 */}
               
                
            </div>
            {/* Cardparent End */}
          
            <a 
            className="viewA"
            href="/">View All</a>
          

        </div>
    )
}

export default Blogs
