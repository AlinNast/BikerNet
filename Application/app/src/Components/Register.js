import { useState } from "react";
import { Navigate } from "react-router-dom";


const Register = () => {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('https://localhost:7133/api/Authenticate/register',{
            method: "POST",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({
                username,
                email,
                password
            })
        });

        if (response.ok){
            setRedirect(true);
        }
        const content = await response.json();

        console.log(content);
        console.log(redirect);
        
    }


    if(redirect){
        return(<Navigate to="/"/>)
    }
    return ( 
        <>
            <form onSubmit={submit}>
                <h1>Not registered yet? Sing up for free</h1>
                <input type="username" placeholder="Username" required 
                    onChange={e => setUsername(e.target.value)}
                />
                
                <input type="email" placeholder="email" required 
                    onChange={e => setEmail(e.target.value)}
                />

                <input type="password" placeholder="password" required 
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Log in</button>
            </form>
        </>
     );
}
 
export default Register;