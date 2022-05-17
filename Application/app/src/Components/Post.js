import useFetch from "./Functions/useFetch";
import Navbar from "./Navbar";
import { Navigate, useParams } from "react-router-dom";


const Post = (props) => {
    const {id} = useParams()
    console.log(id);
    const {data:post, isAuthenticated, isPending} = useFetch(`https://localhost:7133/api/Posts/${id}`)

    if(!isAuthenticated){
        return( <Navigate to="/unauthorized"/>)
    }

    return ( 
        <>
            <Navbar />
            {isPending && <p>Loading...</p>}

            {post && 
                    <div>
                        <h3>{post.title}</h3>

                        <h4>{post.description}</h4>
                    </div>}
        </>
     );
}
 
export default Post;