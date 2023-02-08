import React from 'react';
import { Nav } from 'react-bootstrap';

const SlpashScreen = () => {
    return (
        <div>
        <Nav className="d-flex justify-content-center">
            <Nav.Link href="#home">
            <img
                src="https://i.ibb.co/9GPTqs2/logodm.png"
                width="290"
                height="80"
                className="d-inline-block align-top"
                alt="logo"
                style={{marginTop: '220px'}}
            />
            </Nav.Link>
        </Nav>
    </div>
    );
};

export default SlpashScreen;