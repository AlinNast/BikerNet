import Login from "./Login";
import { Link } from "react-router-dom";


const LandingPage = () => {
    

    return ( 
        <>
            <Login />
            <Link to="/register" className="center-bottom">
            <div >
            <h3 className="align-baseline" >Not a user yet? register here</h3>
            </div>
            </Link>
             
            
        </>
            
        
        

            

            
            
        
     );
}
 
export default LandingPage;