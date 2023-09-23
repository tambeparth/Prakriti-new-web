import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'; // Update the CSS import path and name

const MyCustomNavbar = () => {
    return (
        <div className='header-menu'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <Link to="/">Prakriti</Link>
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
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default MyCustomNavbar;
