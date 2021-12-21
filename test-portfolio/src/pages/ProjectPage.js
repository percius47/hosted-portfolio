import React from 'react'

//import Footer from "../Components/Footer"

import {Helmet} from "react-helmet";
import { useHistory } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navig from '../Components/Nav';
import Nav from '../Components/Nav';
import ProjectList from '../Components/ProjectList';

function ProjectPage() {
    const Title ="Prashant | Projects";
    const history=useHistory();
    return (
        <>
         <h1>projects</h1>
            <button onClick={()=>{
             history.push("/projects")
         }}>Projects</button>
          <button onClick={()=>{
             history.push("/")
         }}>Home</button> <button onClick={()=>{
            history.push("/blogs")
        }}>Blogs</button>
       <Helmet>
     <title>{Title}</title>
         </Helmet>
      {/* <Navig/> */}
         
          <ProjectList/>
           
        
     
            <Footer/>  
           
           
         
         </>
    )
}

export default ProjectPage
