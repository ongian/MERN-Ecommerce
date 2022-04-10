import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useSelector, useDispatch} from 'react-redux';
import { faHouseChimney, faLaptopCode, faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import LoginModal from '../LoginModal/LoginModal';
import './Header.css';
import { MODAL } from '../../../actionTypes/actionTypes';
const Header = () => {
    const dispatch = useDispatch();
    const {userData} = useSelector((state) => state.login)
    const cart = useSelector((state) => state.cart.cart);
    const modal = useSelector((state) => state.modal);

    console.log(userData)
    const signIn = () => {
        dispatch({type: MODAL})
    }
    const closeModal = () => {
        dispatch({type: MODAL})
    }
    return ( 
        <header>
            <LoginModal show={modal} closemodal={() => closeModal()}/>
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
                            <Nav.Link href="/cart">{cart.length > 0 && <span className="cart-notify">{cart.length}</span>}<FontAwesomeIcon icon={faCartShopping} /> Cart</Nav.Link>
                            <Nav.Link href="#link"><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</Nav.Link>
                            {userData ? <NavDropdown title="My Account" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Orders</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                            </NavDropdown> : <Nav.Link href="#link" onClick={() => signIn()}><FontAwesomeIcon icon={faUser} /> Login/Register</Nav.Link>}
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>    
        </header>
     );
}
 
export default Header;