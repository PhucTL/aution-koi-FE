import { Nav, NavDropdown, Navbar, Container, Alert } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Header.css'
import { useState } from "react";
import { useSelector } from "react-redux";

function Header() {
    const user = useSelector((state) => state.auth.profile?.currentUser) 
    const name = user?.name

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
                                <Nav.Link as={Link} to="/profile">Hi, <span>{name}</span></Nav.Link>
                                <Nav.Link as={Link} to="/logout" id="regis">
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