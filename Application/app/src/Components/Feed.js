
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import useFetch from "./Functions/useFetch";
import Navbar from "./Navbar";
import PostsList from "./PostsList";



const Feed = () => {
    
    const {data:posts, isAuthenticated, isPending} = useFetch('https://localhost:7133/api/Posts')

    

    if(!isAuthenticated){
        return( <Navigate to="/unauthorized"/>)
    }
    
    return ( 
        <>

            {isPending && <p>Loading...</p>}

            {posts && <PostsList posts={posts}/>}
           

        </>
     );
}
 
export default Feed;
