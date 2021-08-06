import React from 'react'

//import Footer from "../Components/Footer"

import {Helmet} from "react-helmet";
import Footer from '../Components/Footer';
import ProjectList from '../Components/ProjectList';
const Title ="Prashant | Projects";
function ProjectPage() {
    return (
        <>
        <Helmet>
     <title>{Title}</title>
         </Helmet>
         
          <ProjectList/>
           
        
     
            <Footer/>  
           
         
         </>
    )
}

export default ProjectPage
