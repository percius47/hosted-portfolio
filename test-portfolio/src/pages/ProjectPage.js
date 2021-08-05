import React from 'react'
import Projects from "../Components/Projects"
import Blogs from "../Components/Blogs"
import Skills from "../Components/Skills"
import Footer from "../Components/Footer"
import Nav from "../Components/NavP"
import Intro from "../Components/Intro"
import {Helmet} from "react-helmet";
const Title ="Prashant | Projects";
function ProjectPage() {
    return (
        <>
        <Helmet>
     <title>{Title}</title>
         </Helmet>
         <div className="App">
           <Nav />
            {/* <Intro/>
           <Projects/>
          <Blogs/> */}
          {/*<Skills/>
     
           <Footer/> */}
         </div>
         </>
    )
}

export default ProjectPage
