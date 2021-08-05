import React from 'react'
import "./Nav.css"
function Nav() {
    return (
        <div className="navParent">
    <div className="navigation">
        <h2> <span>Prashant Singh Chauhan</span>.</h2>

        <ul className="nav-pills">
            <li>
                <a className="link active" href="/">Home</a>
            </li>

            <li>
                <a className="link" href="/">Projects</a>
            </li>

            <li>
                <a className="link" href="/">Blogs</a>
            </li>
        </ul>
        </div>
        </div>
       
    )
}

export default Nav