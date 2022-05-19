import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";


const Register = () => {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState("");
    const [secondPassword, setSeccondPassword] = useState();
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
        
    }

    const checkPassword = (pw) => {
        console.log(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#?!.,@$%^&*-])$/.test(pw))
        return (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#?!.,@$%^&*-])$/.test(pw));
    }


    if(redirect){
        return(<Navigate to="/"/>)
    }

    return ( 
        <>

            <Container id="login-container" className="d-grid h-50">
                <Form className="text-center" onSubmit={submit}>
                    <h1>Create a new account, It's Free</h1>
                    <Form.Group id="login-field">
                        <Form.Control type="username" size="lg" placeholder="Your username" className="position-relative" required
                            onChange={ e => {setUsername(e.target.value)}} />
                    </Form.Group>
                    <Form.Group id="login-field">
                        <Form.Control type="emailAddress" size="lg" placeholder="Email Address" className="position-relative" required
                            onChange={ e => {setEmail(e.target.value)}} />
                    </Form.Group>
                    <Form.Group id="login-field">
                        <Form.Control type="password" size="lg" placeholder="Password" className="position-relative" required
                            onChange={ e => {setPassword(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group id="login-field">
                        <Form.Control type="password" size="lg" placeholder="Confirm password" className="position-relative" required
                            onChange={ e => {setSeccondPassword(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group id="login-field">
                    
                        {(password !=secondPassword || password === "") && <>
                            
                                <Button variant="primary" type="submit" value={"Register"} disabled >Register</Button>
                                <Alert variant="danger" id="login-field">Passwords have to match</Alert>
                                <Alert variant="info" id="login-field">Password must contain one uppercase,one lowercase, one digit and one special character</Alert>
                            </>}

                        

                        {(password == secondPassword && password !== "") && <>
                                <Button variant="primary" type="submit" value={"Register"} >Register</Button>
                                <Alert variant="info" id="login-field">Password must contain one uppercase,one lowercase, one digit and one special character</Alert>
                                </>}
                    </Form.Group>
                </Form>
            </Container>
            {/* <form onSubmit={submit}>
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
            </form> */}
        </>
     );
}
 
export default Register;