import Login from "./Login";
import { Link } from "react-router-dom";


const HomePage = () => {
    

    return ( 
        <>
        <Login />

        <h3>Not a user yet? register <Link to="/register">Here</Link></h3>


        </>
     );
}
 
export default HomePage;