import { Nav, NavDropdown, Navbar, Container, Alert } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/apiRequest";

function Header({ userRole }) {
    return (
        <body>
            {userRole === "MANAGER" ? (
                <ManagerNavbar />
            ) : userRole === "BREEDER" ? (
                <BreederNavbar />
            ) : (
                <MemberHeader />
            )}
        </body>
    )
}

const MemberHeader = () => {
    const user = useSelector((state) => state.auth.profile?.currentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userTitle, setUserTitle] = useState(user ? user.fullname : null)
    const [auctionTitle, setAuctionTitle] = useState("Auction")
    
    const handleUserTitle = (title) => {
        setUserTitle(title)
    }

    const handleAuctionTitle = (title) => {
        setAuctionTitle(title)
        handleUserTitle(user?.fullname)
    }

    const handleLogout = () => {
        logOut(dispatch, navigate)
    }

    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/"><img src="/logo/betokoi.png" alt="Logo Betokoi" id="logo" onClick={() => handleUserTitle(user?.fullname)} />Betokoi</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" onClick={() => handleUserTitle(user?.fullname)}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" onClick={() => handleUserTitle(user?.fullname)}>About</Nav.Link>
                        <NavDropdown title={auctionTitle} id="collapsible-nav-dropdown" menuVariant="dark">
                            <NavDropdown.Item as={Link} to="/currentAuction" onClick={() => handleAuctionTitle("Current Auction")}>Current Auction</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/pastAuction" onClick={() => handleAuctionTitle("Past Auction")}>
                                Past Auction
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {user?.fullname ? (
                            <>
                                <Navbar.Collapse id="navbar-white-example">
                                    <Nav>
                                        <NavDropdown
                                            id="nav-dropdown-dark-example"
                                            title={userTitle ? userTitle : user.fullname}
                                            menuVariant="dark"
                                        >
                                            <NavDropdown.Item as={Link} to="/userProfile" onClick={() => handleUserTitle(user.fullname)}>Profile</NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => handleUserTitle("Your Balance")}>
                                                Your Balance
                                            </NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => handleUserTitle("Payment History")}>Payment History</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
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

const ManagerNavbar = () => {
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
                <Navbar.Brand as={Link} to="/#"><img src="/logo/betokoi.png" alt="Logo Betokoi" id="logo" />Betokoi for Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Manage" id="collapsible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/#">Manage Member</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/#">
                                Manage Breeder
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/#">
                                Manage Staff
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/#">Auction Request</Nav.Link>
                        <Nav.Link as={Link} to="/#">Dashboard</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/userProfile">Hi, <span>{name}</span></Nav.Link>
                        <Nav.Link id="regis" onClick={handleLogout}>
                            Log out
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
}

const BreederNavbar = () => {
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
                <Navbar.Brand as={Link} to="/#"><img src="/logo/betokoi.png" alt="Logo Betokoi" id="logo" />Betokoi for Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Manage" id="collapsible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/#">Manage Member</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/#">
                                Manage Breeder
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/#">
                                Manage Staff
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/#">Auction Request</Nav.Link>
                        <Nav.Link as={Link} to="/#">Dashboard</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/userProfile">Hi, <span>{name}</span></Nav.Link>
                        <Nav.Link id="regis" onClick={handleLogout}>
                            Log out
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
}

export default Header