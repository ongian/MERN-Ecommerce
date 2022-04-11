import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useSelector, useDispatch} from 'react-redux';
import { faHouseChimney, faLaptopCode, faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import ModalForms from '../ModalForm/ModalForms';
import './Header.css';
import { MODAL } from '../../../actionTypes/actionTypes';
import { logout } from '../../../actions/userAction';
const Header = () => {
    const dispatch = useDispatch();
    const {userData} = useSelector((state) => state.login)
    const cart = useSelector((state) => state.cart.cart);
    const modal = useSelector((state) => state.modal);

    console.log(userData)
    const signInHandler = () => {
        dispatch({type: MODAL})
    }
    const closeModal = () => {
        dispatch({type: MODAL})
    }
    const logoutHandler = () => {
        dispatch(logout())
    }
    return ( 
        <header>
            <ModalForms show={modal} closemodal={() => closeModal()}/>
            {userData && <div className="w-100 fixed-top text-end greetings">
                <Container>
                    <small class="text-muted">Welcome {userData.name},</small>
                </Container>
            </div>}
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
                            <Nav.Link href="#search"><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</Nav.Link>
                            {userData ? <NavDropdown title="My Account" id="basic-nav-dropdown" className="me-0">
                                <NavDropdown.Item href="#action/3.1">Orders</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#" onClick={() => logoutHandler()}>Logout</NavDropdown.Item>
                            </NavDropdown> : <Nav.Link href="#link" onClick={() => signInHandler()}><FontAwesomeIcon icon={faUser} /> Login/Register</Nav.Link>}
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>    
        </header>
     );
}
 
export default Header;