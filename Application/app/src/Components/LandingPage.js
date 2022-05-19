import Login from "./Login";
import { Link } from "react-router-dom";


const LandingPage = () => {
    

    return ( 
        <>
            <Login />
            <div className="center-bottom">
            <h3 className="align-baseline" >Not a user yet? register <Link to="/register">Here</Link></h3>
            </div>
             
            
        </>
            
        
        

            

            
            
        
     );
}
 
export default LandingPage;