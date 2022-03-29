import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Table, Container, Row, Col, Image, Form} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeToCart } from '../../actions/cartActions';
import AlertMessage from '../layout/AlertMessage/AlertMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
const Cart = () => {
    const {cart} = useSelector(state => state.cart);
    const {COItem, setCOItem} = useState([])
    const dispatch = useDispatch();

    const updateCart = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    const removeOnCart = (id) => {
        dispatch(removeToCart(id))
    }

    const onCheck = (e) => {
        if(e.target.checked){
            setCOItem()
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
            <Container>
                <Row>
                    <Col>
                        {cart.length ? (
                            <>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th style={{maxWidth: "75px"}}>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody valign="center">
                                        {cart.map((c) => (
                                            <tr key={c.product}>
                                                <td style={{maxWidth: "20px"}}>
                                                    <input 
                                                        type="checkbox" 
                                                        value={c.product} 
                                                        onClick={(e) => onCheck(e)}
                                                    />
                                                </td>
                                                <td style={{maxWidth: "75px"}}>
                                                    <Image fluid rounded src={c.image} alt={c.name} />
                                                </td>
                                                <td>
                                                    <Link to={`/product/${c.name.toLowerCase().split(' ').join('-')}/${c.product}`}>
                                                        {c.name}
                                                    </Link>
                                                </td>
                                                <td>
                                                    <h5>{c.price}</h5>
                                                </td>
                                                <td style={{maxWidth: '75px'}}>
                                                    <Form.Control 
                                                        as="select" 
                                                        value={c.qty}
                                                        onChange={(e) => updateCart(c.product, e.target.value)}>
                                                        {[...Array(c.countInStock).keys()].map((o) => (
                                                            <option value={o + 1} key={o + 1}>{o+1}</option>
                                                        ))}
                                                    </Form.Control>
                                                </td>
                                                <td>
                                                    <h5>{c.price * c.qty}</h5>
                                                </td>
                                                <td>
                                                   <FontAwesomeIcon icon={faTrashCan} onClick={() => removeOnCart(c.product)} />
                                                </td>
                                            </tr>
                                        ))}
                                            <tr>
                                                <td align="right" colSpan={6}>
                                                    Cart SubTotal: {cart.reduce((a, b) => a + (b.qty * b.price), 0)}
                                                </td>
                                                <td></td>
                                            </tr>
                                    </tbody>
                                </Table>
                            </>
                        ) : <AlertMessage>You have no items in the cart!</AlertMessage>}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
 
export default Cart;