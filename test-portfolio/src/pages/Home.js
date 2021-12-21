import React from 'react'
import Projects from "../Components/Projects"
import Blogs from "../Components/Blogs"
import Skills from "../Components/Skills"
import Footer from "../Components/Footer"
import Intro from "../Components/Intro"
import {Helmet} from "react-helmet";
import Nav from '../Components/Nav'

const Title ="Prashant | Home";
function Home() {
    return (
        <>
        <Helmet>
     <title>{Title}</title>
         </Helmet>
      <Nav/>
          
            <Intro/>
           <Projects/>
          <Blogs/>
           <Skills/>
     
          <Footer/> 
         
         
         </>
    )
}

export default Home
