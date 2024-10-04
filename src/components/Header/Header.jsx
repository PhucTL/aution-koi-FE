import { Nav, NavDropdown, Navbar, Container, Alert } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/apiRequest";

function Header() {
    const user = useSelector((state) => state.auth.profile?.currentUser) 
    const name = user?.fullname
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        logOut(dispatch, navigate)
    }

    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/"><img src="/logo/betokoi.png" alt="Logo Betokoi" id="logo" />Betokoi</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <NavDropdown title="Auction" id="collapsible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/currentAuction">Current Auction</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/pastAuction">
                                Past Auction
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {name ? (
                            <>
                                <Nav.Link as={Link} to="/userProfile">Hi, <span>{name}</span></Nav.Link>
                                <Nav.Link id="regis" onClick={handleLogout}>
                                    Log out
                                </Nav.Link>
                            </>
                        ) :
                            (
                                <>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    <Nav.Link as={Link} to="/register" id="regis">
                                        Register
                                    </Nav.Link>
                                </>
                            )}

                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
}

export default Header