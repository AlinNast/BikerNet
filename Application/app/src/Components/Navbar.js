import { useState } from "react";
import { Navigate } from "react-router-dom";


const Navbar = () => {
    const[isLogout, setLogout] = useState(false);

    const logout = () => {
        window.sessionStorage.removeItem("authToken")
        setLogout(true);
    }

    if(isLogout){
        return(<Navigate to="/"/>)
    }
    return ( 
        <>
            <p>This is the navbar</p>
            <button onClick={logout}>Logout</button>
        </>
     );
}
 
export default Navbar;