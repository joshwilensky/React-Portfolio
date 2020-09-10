import React from 'react';
import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap'
import '../Navbar/navbar.css'

function NavBar() {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand href="#home">Joshua A. Wilensky</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <NavDropdown title="Contact" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://linkedin.com/in/joshwilensky"><i class="fab fa-linkedin-in pr-1"></i>LinkedIn</NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/joshwilensky"><i class="fab fa-github pr-1"></i>GitHub</NavDropdown.Item>
                            <NavDropdown.Item href="https://mailto:joshwilensky@gmail.com"><i class="fas fa-envelope pr-1"></i>Email</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </>
        </div>
    );
}
export default NavBar;