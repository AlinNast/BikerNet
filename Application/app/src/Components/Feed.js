import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";


const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(true);

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
                })//.then( response => response.json())

                if(response.status == 401){
                    setIsAuthenticated(false)
                }
                const content = await response.json();
                setPosts(content);
                console.log(content)
                console.log(posts)

            }
        )();

    }, [posts]);

    if(!isAuthenticated){
        return( <Navigate to="/"/>)
    }
    
    return ( 
        <>
            <Navbar/>
            <h1>This is the Feed</h1>

            <div>
                {posts.map((post) => (
                    <div key={post.id} className="post" style={{"background": "#ddc", "padding": "1em", "margin":"1em"}}>
                    <br></br>
                    <h2>{post.title}</h2>
                    <h3>{post.description}</h3>
                    <br></br>
                    </div >

                ))}
            </div>
            

        </>
     );
}
 
export default Feed;