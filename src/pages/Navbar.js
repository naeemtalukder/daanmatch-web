import React from 'react';
import { Nav } from 'react-bootstrap';

const Navbar = () => {
    return (
        <div>
             <Nav className="d-flex justify-content-center">
            <Nav.Link href="#home">
            <img
                src="https://i.ibb.co/9GPTqs2/logodm.png"
                width="260"
                height="60"
                className="d-inline-block align-top"
                alt="logo"
            />
            </Nav.Link>
        </Nav>
        </div>
    );
};

export default Navbar;