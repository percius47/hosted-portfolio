import React from 'react'
import  "./Projects.css"
import { NavLink} from 'react-router-dom';
function Projects() {
    return (
        <div className="project">
            <h2>My <span>Work</span> </h2>
            <div className="cardParent">

            <div className="card">
            <h3>To-do App</h3>
                <small>22nd June 2021</small>
                <p>App manages your to-dos in a list form, made using Firebase in React JS</p>
                <div className="techStack">
                <h6>MERN</h6>
                <h6>Tailwind CSS</h6>
                <h6>Vanilla JS</h6>                   
                         `<h6>Firebase</h6>             
                
                </div>
                <div className="code">
                <a href="https://prashant-todo.netlify.app/" target="_blank" rel="noreferrer noopener" className="live">View Live</a>
                    <a href="https://github.com/percius47/todo-app-firebasereact" target="_blank" rel="noreferrer noopener" className="source">View Source</a>
                </div>
                </div>

                <div className="card">

                <h3>Netflix re-done!</h3>
                <small>13th July 2021</small>
                <p>A Netflix Clone App with database support included payment gateways and separate profile management with encrypted user login. using Stripe API. Tech Stack used- MERN, Tailwind CSS, Firebase, Stripe. <strong>The Subscription section is not working due to some issues with Stripe.</strong></p>
                <div className="techStack">
                <h6>MERN</h6>
                <h6>Tailwind CSS</h6>
                <h6>Vanilla JS</h6> 
                <h6>Firebase</h6>
                       <h6>Stripe API</h6>           
                </div>
                <div className="code">
                <a href="https://netflix-redone.netlify.app/" target="_blank" rel="noreferrer noopener" className="live">View Live</a>
                    <a href="https://github.com/percius47/netflix-clone" target="_blank" rel="noreferrer noopener" className="source">View Source</a>
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
                    <a href="https://stock-prices.netlify.app" target="_blank" rel="noreferrer noopener" className="live">View Live</a>
                    <a href="https://github.com/percius47/stox" target="_blank" rel="noreferrer noopener" className="source">View Source</a>
                </div> 
                </div>


                
                {/* C3 */}
               
           
            </div>
            {/* Cardparent End */}
            <NavLink exact to="/projects" className="viewA">View All</NavLink>
           
          
        </div>
    )
}

export default Projects
