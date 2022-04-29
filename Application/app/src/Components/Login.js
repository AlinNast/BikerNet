import { useState } from "react";

const Login = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('https://localhost:7133/api/Authenticate/login',{
            method: "POST",
            headers: {'Content-Type': "application/json"},
            credentials: 'include',
            body: JSON.stringify({
                username,
                password
            })
        });

        const content = await response.json();

        console.log(content);
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