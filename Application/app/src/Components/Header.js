import { useState } from "react";
import {  Navigate } from "react-router-dom";
import { Navbar, Button, Nav, NavItem, Link, NavDropdown } from "react-bootstrap";


const Header = () => {
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
            <Navbar bg="navbarColor" variant="dark" sticky="top">

                
                    <Navbar.Brand >
                    {/* <img src={logo}/> */}
                        <Nav.Link to="/home" className="homeLogo">Home</Nav.Link>{'  '}
                    </Navbar.Brand>
                    <Navbar.Toggle />

                <Navbar.Collapse>
                    <Nav>
                            <Nav.Link href="/home" disabled>News</Nav.Link>
                        
                    </Nav>

                    <Nav className="d-flex justify-content-end" style={{width: "100%"}}>
                        <p style={{color: "#aaa", margin:"14px", fontSize:"16px"}}> {"Hello,"}   </p><p style={{color: "#ffffff", margin:"10px", marginRight:"3em", fontSize:"20px"}}> {user}</p> {'  '}
                        <NavDropdown title="Options">
                            <NavDropdown.Item href="/settings" disabled>Settings</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item onClick={logout}>Log Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>




        {/* <Nav className="justify-content-center navbar-dark bg-dark" activeKey="/home">
            <Nav.Item>
                <p className="text-light">Hello {user}</p>
            </Nav.Item>
            <Nav.Item>
            <Link to="/home">Home</Link>
                
            </Nav.Item>
            
        </Nav> */}
            

            
        </>
     );
}
 
export default Header;