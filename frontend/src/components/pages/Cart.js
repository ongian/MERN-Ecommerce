import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image, Form, Button, Card} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeToCart } from '../../actions/cartActions';
import AlertMessage from '../layout/AlertMessage/AlertMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
const Cart = () => {
    const {cart} = useSelector(state => state.cart);


    const dispatch = useDispatch();

    const updateCart = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    const removeOnCart = (id) => {
        dispatch(removeToCart(id))
    }

    const onCheck = (e) => {
        if(e.target.checked){
            const id = e.target.value;
            console.log(e.target.value)
        } else {
            console.log('Removed - ', e.target.value)
        }
    }
    // const addToCheckout = (id, name, qty, price) => {
    //     setCOItem((prev) => {
    //         return [
    //             ...prev,
    //             {
    //                 id,
    //                 name,
    //                 qty,
    //                 price
    //             }
    //         ]
    //     })
    // }
    return (
        <section className="cart">
            <Container className="px-2">
                <Row>
                    {cart.length ? (
                        <>
                            <Col md={8}>
                            {cart.map((c) => (
                                <Row className="align-items-center p-1 mb-1">
                                    <Col xs={12} md={2} className="p-2">
                                        <Image fluid src={c.image} alt={c.name} />
                                    </Col>
                                    <Col xs={12} md={5} className="text-center text-md-start">
                                        <Link to={`/product/${c.name.toLowerCase().split(' ').join('-')}/${c.product}`}>
                                            {c.name}
                                        </Link>
                                    </Col>
                                    <Col xs={3} md={1}>
                                        <Form.Control 
                                            as="select" 
                                            value={c.qty}
                                            onChange={(e) => updateCart(c.product, e.target.value)}>
                                            {[...Array(c.countInStock).keys()].map((o) => (
                                                <option value={o + 1} key={o + 1}>{o+1}</option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col xs={6} md={3}>
                                        <small>Price: {c.price}</small>
                                        <h5><small>Total: {(c.price * c.qty).toFixed(2)}</small></h5>
                                    </Col>
                                    <Col xs={3} md={1} className="text-center">
                                        <FontAwesomeIcon icon={faTrashCan} onClick={() => removeOnCart(c.product)} />
                                    </Col>
                                </Row>))}
                            </Col>
                            <Col md={4} className="my-sm-2 my-md-0">
                                <Card className="p-2">
                                    <h4>Order Summary:</h4>
                                    <ul className="list-group list-group-flush">
                                        {cart.map((c) => (<li className="list-group-item" key={c.product}>
                                            <p className="mb-0"><small>{c.name}</small></p>
                                            <div className="flex align-items-center justify-content-between">
                                                <div className="w-50 d-inline-block">{c.price} x {c.qty}</div>
                                                <div className="w-50 d-inline-block text-end"><strong>{(c.price * c.qty).toFixed(2)}</strong></div>
                                            </div>
                                        </li>))}
                                    </ul>
                                    <h4 className="text-end my-2">Total: {(cart.reduce((a, b) => a + (b.qty * b.price), 0)).toFixed(2)}</h4>
                                    <Button>Proceed to Checkout</Button>
                                </Card>
                            </Col>
                        </>
                    ): <Col><AlertMessage>You have no items in the cart!</AlertMessage></Col>} 
                </Row>
            </Container>
        </section>
    );
}
 
export default Cart;