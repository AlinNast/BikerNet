import { Card } from "react-bootstrap";
import { useState } from "react";

import { Link, Navigate } from "react-router-dom";

const PostCard = (props) => {
    const post = props.post
    console.log(post)

    const [redirect, setRedirect] = useState(false);


    const click = () => {
        setRedirect(true);
    }

    if(redirect) {
        return(<Navigate to={`/post/${post.id}`} />)
    }

    return ( <>
    
        <Card className="post-card" onClick={click} >
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <footer className="blockquote-footer">
                    string
                </footer>
            </Card.Body>
        </Card>
        
    </> );
}
 
export default PostCard;