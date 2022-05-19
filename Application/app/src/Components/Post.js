import useFetch from "./Functions/useFetch";
import { Navigate, useParams } from "react-router-dom";
//import postImg from "/public/postimg.png";
import Header from "./Header";
import { Card } from "react-bootstrap";
import { Button } from "bootstrap";


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

            {post && (

                    <Card className="single-post">
                        <Card.Img variant="top" src="/public/postimg.png"/>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.description}</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link>Like</Card.Link>
                        </Card.Body>
                    </Card>

            )};
        </>
    )}

export default Post;
