import React from 'react'
import "./Blogs.css";
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
function Blogs() {
    return (
        <div className="blog">
             <h2>My <span>Blogs</span> </h2>
            <div className="cardParent">

                <div className="card">
                <h3>Stock Returns</h3>
                <small>31st July 2021</small>
                <p>App Calculates your absolute and percentage profit/loss in stock transactions.</p>
                <div className="code">
                    <a href="/" className="liveB">Read</a>
                  
                </div>

                </div>

                <div className="card">

                <h3>Stock Returns</h3>
                <small>31st July 2021</small>
                <p>App Calculates your absolute and percentage profit/loss in stock transactions.</p>
                <div className="code">
                    <a href="/" className="liveB">Read</a>
                  
                </div>


                </div>
    
                <div className="card">

                <h3>Stock Returns</h3>
                <small>31st July 2021</small>
                <p>App Calculates your absolute and percentage profit/loss in stock transactions.</p>
               
                <div className="code">
                    <a href="/" className="liveB">Read</a>
                  
                </div>

                </div>
                {/* C3 */}
               
                
            </div>
            {/* Cardparent End */}
            <NavLink exact to="/blogs" className="viewA">View All</NavLink>
           
          

        </div>
    )
}

export default Blogs
