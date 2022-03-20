import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faLaptopCode, faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
const Header = () => {
   
    return ( 
        <header>
            <Navbar bg="primary" expand="lg" variant="dark" fixed="top" className="mb-5">
                <Container>
                    <Navbar.Brand href="/"><FontAwesomeIcon icon={faHouseChimney} /> Matt.io</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-lg-end nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/"><FontAwesomeIcon icon={faHouseChimney} /> Home</Nav.Link>
                            <Nav.Link href="/products"><FontAwesomeIcon icon={faLaptopCode} /> Products</Nav.Link>
                            <NavDropdown title="Category" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link"><FontAwesomeIcon icon={faCartShopping} /> Cart</Nav.Link>
                            <Nav.Link href="#link"><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</Nav.Link>
                            <Nav.Link href="#link"><FontAwesomeIcon icon={faUser} /> Login/Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>    
        </header>
     );
}
 
export default Header;