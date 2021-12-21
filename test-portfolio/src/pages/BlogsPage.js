import React from 'react'

//import Footer from "../Components/Footer"

import {Helmet} from "react-helmet";
import Footer from '../Components/Footer';
import BlogList from '../Components/BlogList';
import Nav from '../Components/Nav';
const Title ="Prashant | Blogs";
function BlogsPage() {
    return (
        <>
        <Helmet>
     <title>{Title}</title>
         </Helmet>
      <Nav/>
         
          <BlogList />
           
        
     
            <Footer/>  
           
         
         </>
    )
}

export default BlogsPage
