import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="sm">
            <Link to="/">
                <Navbar.Brand>Frontend Task</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <Nav className="mr-sm-2">
                    <Link className="nav-link" to="/cats">Cats</Link>
                    <Link className="nav-link" to="/lotr">Lord Of The Rings</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;