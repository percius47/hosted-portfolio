import React from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import BlogsPage from '../pages/BlogsPage';
import Home from '../pages/Home';
import ProjectPage from '../pages/ProjectPage';
 import "./Nav.css"
function Nav() {
    return (
        <Router>
        <div className="navParent">
    <div className="navigation">
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
        </div>
        </div>
        

        <Switch>
         
           <Route path="/projects" >
              <ProjectPage/>
              </Route> 
              <Route exact path="/" >
          <Home/>
         </Route>
       
           
          
          <Route path="/blogs">
            <BlogsPage />
          </Route> 
       </Switch>
        </Router>
    )
};

export default Nav
