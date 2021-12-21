import React from 'react'

//import Footer from "../Components/Footer"

import {Helmet} from "react-helmet";
import Footer from '../Components/Footer';
import BlogList from '../Components/BlogList';

import Navig from '../Components/Nav';
import { useHistory } from 'react-router-dom';

function BlogsPage() {
    const Title ="Prashant | Blogs";
    const history=useHistory();
    return (
        <>
      

        {/* <Helmet>
     <title>{Title}</title>
         </Helmet>
      <Navig/>
         
          <BlogList />
           
        
     
            <Footer/>   */}
           
         <h1>BLogs</h1>
         <button onClick={()=>{
             history.push("/projects")
         }}>Projects</button>
          <button onClick={()=>{
             history.push("/")
         }}>Home</button> <button onClick={()=>{
            history.push("/blogs")
        }}>Blogs</button>
         
      
         </>
    )
}

export default BlogsPage
