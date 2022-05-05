import { useEffect, useState } from "react";


const Feed = () => {
    const [posts, setPosts] = useState();

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
                }).then( response => response.json())

                const content = await response;

                setPosts(content.posts);

                console.log(content);
                console.log(posts);
            }
        )();
    });


    return ( 
        <>
            <p>this is the Feed</p>
        </>
     );
}
 
export default Feed;