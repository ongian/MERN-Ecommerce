import React, {useState, useEffect} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import axios from 'axios';

//import products from '../../../products';

const ProductContainer = ({productTitle, numOfSKU, typeOfSKU}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async() => {
            try {
                const productsAPI = await axios.get('/api/products');
                const {data} = productsAPI;
                setProducts(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    }, [])
    const skus = products.slice(0, numOfSKU);

    return (<section>
        <Container>
            <h2>{productTitle}</h2>
            <Row>
                {skus.map(product => (<Col lg={3} md={4} sm={6} xs={12} className="px-sm-1" key={product._id}>
                    <ProductCard product={product} />
                </Col>))}
            </Row>
            
        </Container>
    </section>);
}
 
export default ProductContainer;