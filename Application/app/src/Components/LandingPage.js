import Login from "./Login";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";


const LandingPage = () => {
    

    return ( 
        <>
            <Login />
            <span className="align-text-bottom">
            <h3 className="align-baseline" id="center-bottom">Not a user yet? register <Link to="/register">Here</Link></h3> 
            </span>
        </>
            
        
        

            

            
            
        
     );
}
 
export default LandingPage;