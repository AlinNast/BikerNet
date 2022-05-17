import { Link, Navigate } from "react-router-dom";

const PostsList = (props) => {
    const posts = props.posts;

    
    console.log(props);
    return ( 
        <div className="post-list">
            {posts.map((post) => (
                    <div key={post.id} className="post" style={{"background": "#ddc", "padding": "1em", "margin":"1em"}}>
                        <Link to={`/post/${post.id}`} ><h2>{post.title}</h2></Link>
                        <h3>{post.description}</h3>
                    </div >

                ))}
        </div>
     );
}
 
export default PostsList;