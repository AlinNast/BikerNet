import { useState } from "react";
import { Link, Navigate } from "react-router-dom";


const Navbar = () => {
    const[isLogout, setLogout] = useState(false);
    const[user, setUser] = useState(window.sessionStorage.getItem("user"))

    const logout = () => {
        window.sessionStorage.removeItem("authToken")
        setLogout(true);
    }

    if(isLogout){
        return(<Navigate to="/"/>)
    }
    return ( 
        <>
            <Link to="/home">Home</Link>

            <p>hello {user}</p>
            <button onClick={logout}>Logout</button>
        </>
     );
}
 
export default Navbar;