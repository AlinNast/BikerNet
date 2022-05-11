
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import PostsList from "./PostsList";



// the feed should be a component of its own in homepage
const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [isPending, setIsPending] = useState(true);

    useEffect( () => {
        (
            async () => {
                const response = await fetch('https://localhost:7133/api/Posts', 
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': 'Bearer ' + window.sessionStorage.getItem("authToken")
                    },
                    credentials: "include",
                })

                if(response.status === 401){
                    setIsAuthenticated(false)
                }
                const content = await response.json();
                setPosts(content);
                //console.log(content)
                //console.log(posts)
            }
        )();

    }, [posts]);

    if(!isAuthenticated){
        return( <Navigate to="/"/>)
    }
    
    return ( 
        <>
            <Navbar/>

            {isPending && <p>Loading...</p>}
            <div>
                <PostsList posts={posts}/>
            </div>
            

        </>
     );
}
 
export default Feed;
// hook for unauthorized that gets cought in the cath in the fect that renders different component for problems with link for home