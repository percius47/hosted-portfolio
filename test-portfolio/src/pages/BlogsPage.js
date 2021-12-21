import React from 'react'

//import Footer from "../Components/Footer"

import {Helmet} from "react-helmet";
import Footer from '../Components/Footer';
import BlogList from '../Components/BlogList';

import Navig from '../Components/Nav';
const Title ="Prashant | Blogs";
function BlogsPage() {
    return (
        <>
        <Helmet>
     <title>{Title}</title>
         </Helmet>
      <Navig/>
         
          <BlogList />
           
        
     
            <Footer/>  
           
         <h1>BLogs</h1>
         </>
    )
}

export default BlogsPage
