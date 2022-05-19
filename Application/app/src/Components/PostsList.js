import { Link, Navigate } from "react-router-dom";
import PostCard from "./PostCard";

const PostsList = (props) => {
    const posts = props.posts;
    console.log(props);

    return ( 
        <div className="post-list">
            {posts.map((post) => (
                <>
                <PostCard key={post.id} post={post}/>
                </>
                
                    

                ))}
        </div>
     );
}
 
export default PostsList;