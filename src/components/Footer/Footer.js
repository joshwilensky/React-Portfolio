import React from 'react';
import { Navbar } from 'react-bootstrap'

function Footer() {
    return (
        <div>

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top" />{' '}
                        JW's Portfolio
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Footer;