import React from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap'; // Import Image from react-bootstrap
import { Link } from 'react-router-dom';
import './CustomNavbar.css';
import Logo from "../../images/logo-transperent.png";
// import Login from "../../images/profile.png";
// import Login from "https://www.flaticon.com/free-icons/login";
const MyCustomNavbar = () => {
    return (
        <div className='header-menu'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    {/* Add the Prakriti logo to the Navbar */}
                    <Image src={Logo} alt="Prakriti Logo" className="prakriti-logo" />

                    <Navbar.Brand href="/" className="prakriti-classname">
                        <Link to="/" >Prakriti</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/ChatBot">
                                <Link to="/ChatBot">ChatBot</Link>
                            </Nav.Link>
                            <Nav.Link href="/QuizComp">
                                <Link to="/QuizComp">Quiz</Link>
                            </Nav.Link>
                            <Nav.Link href="/History">
                                <Link to="/History">History</Link>
                            </Nav.Link>
                            {/* <Nav.Link href="/History">
                                <Link to="/History">Home</Link>
                            </Nav.Link> */}
                        </Nav>
                        {/* <Nav.Link href="/">
                            <Link to="/"><img href={Login} alt='sorryy'></img></Link>
                        </Nav.Link> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default MyCustomNavbar;
