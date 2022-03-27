import {Link, useNavigate} from 'react-router-dom'
import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ReviewStar from '../../layout/ReviewStar/ReviewStar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import PDPCarousel from '../../layout/PDPCarousel/PDPCarousel';
import { useDispatch, useSelector } from 'react-redux';
import { singleProduct } from '../../../actions/productActions';
import { addToCart } from '../../../actions/cartActions';
import Loader from '../../layout/Loader/Loader';
import AlertMessage from '../../layout/AlertMessage/AlertMessage';
const ProductDetailPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {product, error, loading} = useSelector(state => state.product);
    const {id} = useParams();
    //const [product, setProduct] = useState(null);

    useEffect(() => {
        dispatch(singleProduct(id))
    }, [id, dispatch])
    //const product = products.filter(sku => sku._id === id)[0];

    const [quantity, setQuantity] = useState(1);

    const [preview, setPreview] = useState(0);

    const checkout = () => {
        navigate(`/checkout/${id}?quantity=${quantity}`)
    }

    const addtocart = () => {
        dispatch(addToCart(id,quantity));
        console.log('Added to cart')
    }
    const onchangeQuantity = (e) => {
        if(e.target.value > product.countInStock){
            setQuantity(product.countInStock)
        } else {
            setQuantity(e.target.value);
        }
    }

    const onKeyPressQuantity = (e) => {
        if(e.key.match(/\d/)){
            return e.key;
        } else {
            e.preventDefault()
        }
        
    }

    const addQuantity = (e) => {
        if(quantity < product.countInStock){
            setQuantity(quantity + 1)
        } else {
            e.preventDefault()
        }
    };

    const substractQuantity = (e) => {
        if(quantity > 1){
            setQuantity(quantity - 1);
        } else {
            e.preventDefault();
        }
    };



    const previewImg = (slide) => {
        setPreview(slide)
    };

    
    return (
        <section>
            {loading ? <Loader /> : (error ? <AlertMessage>{error}</AlertMessage>: <Container>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active">{product.name}</li>
                </ol>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="pdp-image mb-3">
                            <img src={product.image[preview]} alt={product.name} className="img-fluid" />
                            <PDPCarousel product={product} previewImg={previewImg} />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h1>
                            {product.name}
                        </h1>
                        <small>Brand: <Link to={`/brand/${product.brand}`}>{product.brand}</Link> Category: <Link to={`/brand/${product.category}`}>{product.category}</Link></small>
                        <div className="text-muted reviews d-flex justify-content-start my-2">
                            <ReviewStar rating={product.rating} numOfReview={product.numReviews} />
                        </div>
                        <div className="prices">
                            {product.listPrice > 0 && <del>{product.listPrice}</del>}
                            <h2>{product.price}</h2>
                        </div>
                        <div className="description">
                            <p>{product.description}</p>
                        </div>
                        <div className="quantity">
                            <Row>
                                <Col md={12} lg={4}>
                                    <div className="input-group mb-1">
                                        <span className="input-group-text px-3" onClick={substractQuantity}>
                                            <FontAwesomeIcon icon={faMinus} />    
                                        </span>
                                        <input 
                                            type="text" 
                                            className="form-control px-3 text-center" 
                                            aria-label="Quantity" 
                                            name="quantity" 
                                            value={quantity} 
                                            onChange={onchangeQuantity}
                                            onKeyPress={onKeyPressQuantity}
                                        />
                                        <span className="input-group-text px-3" onClick={addQuantity}>
                                            <FontAwesomeIcon icon={faPlus} />    
                                        </span>
                                    </div>
                                    <p className="text-secondary mb-3">{product.countInStock} Items left</p>
                                </Col>
                                <Col md={12} lg={8} className="">
                                    <button type="button" className="btn btn-primary w-50 px-3" onClick={addtocart}><FontAwesomeIcon icon={faCartShopping} /> ADD TO CART</button>
                                    <button type="button" className="btn btn-warning w-50 px-3" onClick={checkout}>CHECKOUT</button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <h3>Reviews</h3>
                </Row>
            </Container>)}
        </section>
    );
}
 
export default ProductDetailPage;