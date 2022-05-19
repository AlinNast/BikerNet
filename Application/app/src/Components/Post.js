import useFetch from "./Functions/useFetch";
import { Navigate, useParams } from "react-router-dom";
import Header from "./Header";


const Post = (props) => {
    const {id} = useParams()
    console.log(id);
    const {data:post, isAuthenticated, isPending} = useFetch(`https://localhost:7133/api/Posts/${id}`)

    if(!isAuthenticated){
        return( <Navigate to="/unauthorized"/>)
    }

    return ( 
        <>
            <Header />
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