import React from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Home from '../pages/Home';
import ProjectPage from '../pages/ProjectPage';
 import "./Nav.css"
function Nav() {
    return (
        <Router>
        <div className="navParent">
    <div className="navigation">
        <h2> <span>Prashant Singh Chauhan</span>.</h2>

        <ul className="nav-pills">
            <li>
              
                <NavLink exact to="/" className="link" activeclassName='active' > Home</NavLink>
            </li>

            <li>
                
                <NavLink exact to="/projects" className="link" activeClassName="active"> Projects</NavLink>
            </li>

            <li>
                {/* <a className="link"  >Blogs</a> */}
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
       
           
          
          {/* <Route path="/blogs">
            <Blogs />
          </Route>  */}
       </Switch>
        </Router>
    )
};

export default Nav
