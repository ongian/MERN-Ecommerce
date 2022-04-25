import React, {useState} from 'react';
import { Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useSelector, useDispatch} from 'react-redux';
import { faHouseChimney, faLaptopCode, faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import ModalForms from '../ModalForm/ModalForms';
import {Link} from 'react-router-dom'
import './Header.css';
import { MODAL } from '../../../actionTypes/actionTypes';
import { logout } from '../../../actions/userAction';
const Header = () => {
    const dispatch = useDispatch();
    const {userData} = useSelector((state) => state.login)
    const cart = useSelector((state) => state.cart.cart);
    const modal = useSelector((state) => state.modal);
    const [showCart, setShowCart] = useState(false);


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
        <header className={userData && 'loggedIn'}>
            <ModalForms show={modal} closemodal={() => closeModal()}/>
            <Container className="account-nav">
                <Row className="align-items-center">
                    <Col xs={6}>
                        {userData && <small className="text-muted">Welcome {userData.name},</small>}
                    </Col>
                    <Col xs={6} className="text-end">
                        <Link to="#search"><FontAwesomeIcon icon={faUser} /></Link>
                        <Link to="/cart">{cart.length > 0 && <span className="cart-notify">{cart.length}</span>}<FontAwesomeIcon icon={faCartShopping} /></Link>
                        <Link to="#search"><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
                    </Col>
                </Row>
            </Container>
            <Navbar bg="primary" expand="lg" variant="dark" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/"><FontAwesomeIcon icon={faHouseChimney} /> Matt.io</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-lg-end nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/products"><FontAwesomeIcon icon={faLaptopCode} /> Products</Nav.Link>
                            <NavDropdown title="Category" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            
                            {userData ? <NavDropdown 
                                title="My Account" 
                                id="basic-nav-dropdown" 
                                className="me-0"
                                show={showCart}
                                onMouseEnter={() => setShowCart(true)}
                                onMouseLeave={() => setShowCart(false)}>
                                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
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