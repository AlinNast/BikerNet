import { useState } from "react";
import { Navigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import jwt_decode from "jwt-decode";
import { Container, Form } from "react-bootstrap";


const Login = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {

        console.log("login startet");
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

        setRedirect(true);
    }


    if(redirect) {
        return(<Navigate to="/home" />)
    }

    return ( 
        <>
            <Container id="login-container" className="d-grid h-50">
                <Form className="text-center" onSubmit={submit}>
                    <h1>Log in to continue</h1>
                    <Form.Group id="login-field">
                        <Form.Control type="username" size="lg" placeholder="Your username" className="position-relative" required
                            onChange={ e => {setUsername(e.target.value)}} />
                    </Form.Group>
                    <Form.Group id="login-field">
                        <Form.Control type="password" size="lg" placeholder="Password" className="position-relative" required
                            onChange={ e => {setPassword(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group id="login-field">
                    <Button variant="primary" type="submit" value={"Log in"} >Log In</Button>
                    </Form.Group>
                </Form>
            </Container>
            {/*  */}
        </>
     );
}
 
export default Login;