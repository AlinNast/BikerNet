import { useState } from "react";
import { Navigate } from "react-router-dom";


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

        //console.log(window.sessionStorage.getItem("authToken"));

        setRedirect(true);
    }


    if(redirect) {
        return(<Navigate to="/feed" />)
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