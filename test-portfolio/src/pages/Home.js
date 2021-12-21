import React from 'react'
import Projects from "../Components/Projects"
import Blogs from "../Components/Blogs"
import Skills from "../Components/Skills"
import Footer from "../Components/Footer"
import Intro from "../Components/Intro"
import {Helmet} from "react-helmet";
import Nav from '../Components/Nav'
import Navig from '../Components/Nav'
import { useHistory } from 'react-router-dom'

function Home() {
    const Title ="Prashant | Home";
    const history=useHistory();
    return (
       

        <>
        
        <Helmet>
     <title>{Title}</title>
         </Helmet>
           <h1>home</h1> 
         <button onClick={()=>{
             history.push("/projects")
         }}>Projects</button>
          <button onClick={()=>{
             history.push("/")
         }}>Home</button> <button onClick={()=>{
            history.push("/blogs")
        }}>Blogs</button>

   {/* <Navig/> */}
        
            <Intro/>
           {/* <Projects/>
          <Blogs/>
           <Skills/> */}
     
          <Footer/>
         </>
    )
}

export default Home
