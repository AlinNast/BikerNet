import { Link } from "react-router-dom";

const Unautorized = () => {
    return ( 
        <>
            <p>
                Ups... Unauthorized
                <Link to="/">Return to login page</Link>
            </p>
        </>
     );
}
 
export default Unautorized;