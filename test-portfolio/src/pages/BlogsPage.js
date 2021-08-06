import React from 'react'

//import Footer from "../Components/Footer"

import {Helmet} from "react-helmet";
import Footer from '../Components/Footer';
import BlogList from '../Components/BlogList';
const Title ="Prashant | Blogs";
function BlogsPage() {
    return (
        <>
        <Helmet>
     <title>{Title}</title>
         </Helmet>
         
          <BlogList />
           
        
     
            <Footer/>  
           
         
         </>
    )
}

export default BlogsPage
