import { useState } from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";


const Login = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://localhost:7133/api/Authenticate/login',{
            method: "POST",
            headers: {'Content-Type': "application/json",},
            //credentials: 'include',
            body: JSON.stringify({
                username,
                password
            })
        }).then( response => response.json());

        const content = await response;
        window.sessionStorage.setItem("authToken", content.token)
        window.sessionStorage.setItem("user", jwt_decode(window.sessionStorage.getItem("authToken"), { header: false })["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"])

        //console.log(window.sessionStorage.getItem("authToken"));

        //const current_user = jwt_decode(window.sessionStorage.getItem("authToken"), { header: false });
        //console.log(window.sessionStorage.getItem("user"))
        setRedirect(true);
    }


    if(redirect) {
        return(<Navigate to="/home" />)
    }

    return ( 
        <>
            <form onSubmit={submit}>
                <h1>Please login to continue</h1>
                <input type="username" placeholder="Username" required
                    onChange={ e => {setUsername(e.target.value)}}
                />
                <input type="password" placeholder="password" required
                    onChange={ e => {setPassword(e.target.value)}}
                />
                <button type="submit">Log in</button>
            </form>
        </>
     );
}
 
export default Login;