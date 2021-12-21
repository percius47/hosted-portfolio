import React from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

 import "./Nav.css"
function Navig() {
    return (
       
        <div className="navParent">
    {/* <div className="navigation">
        <h2> 
        <NavLink exact to="/" className="link" >
            <span>Prashant Singh Chauhan</span>.
        </NavLink>           
             </h2>

        <ul className="nav-pills">
            <li>
            <NavLink exact to="/" className="link" activeClassName="active"> Home</NavLink>
               
            </li>

            <li>
                
                <NavLink exact to="/projects" className="link" activeClassName="active"> Projects</NavLink>
            </li>

            <li>
            <NavLink exact to="/blogs" className="link" activeClassName="active"> Blogs</NavLink>
            </li> 
        </ul>
        </div> */}
        </div>
        
    )
};

export default Navig
