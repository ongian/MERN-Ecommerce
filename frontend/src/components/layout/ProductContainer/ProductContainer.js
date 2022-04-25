import React, {useEffect} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import {useDispatch, useSelector} from 'react-redux';
import {listProducts} from '../../../actions/productActions';
import Loader from '../Loader/Loader';
import AlertMessage from '../AlertMessage/AlertMessage';
//import products from '../../../products';

const ProductContainer = ({productTitle, numOfSKU, typeOfSKU}) => {
    const dispatch = useDispatch();
    const {products, error, loading} = useSelector(state => state.productList)
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


    const skus = products && products.slice(0, numOfSKU);

    return (
        <Container>
            {loading ? <Loader /> : (error ? <AlertMessage>{error}</AlertMessage> : <>
                <h2>{productTitle}</h2>
                <Row>
                    {skus.map(product => (<Col lg={3} md={4} sm={6} xs={12} className="px-sm-1" key={product._id}>
                        <ProductCard product={product} />
                    </Col>))}
                </Row>
            </>)}
        </Container>
    );
}
 
export default ProductContainer;