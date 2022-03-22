import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import ReviewStar from '../ReviewStar/ReviewStar';
const ProductCards = ({product}) => {
    return (
        <Card className='mx-1 my-2 p-3 rounded product'>
                <Link to={`/product/${product.name.toLowerCase().split(' ').join('-')}/${product._id}`} className="text-center">
                    <Card.Img src={product.image[0]} variant='top' className="img-fluid w-auto"/>
                </Link>
                <Card.Body className="p-1">
                <Link to={`/product/${product.name.toLowerCase().split(' ').join('-')}/${product._id}`}>
                    <Card.Title as='h3' className="d-flex align-items-center text-primary">
                        {product.name.length > 40 ? `${product.name.slice(0, 40)}...` : product.name}
                    </Card.Title>
                </Link>
                <Card.Text as='div' className="d-flex align-items-center justify-content-between">{product.listPrice !== 0 && <del><h4>{product.listPrice}</h4></del>}<h4><strong className="text-primary">{product.price}</strong></h4></Card.Text>
                <Card.Text as='div' className="text-muted reviews d-flex justify-content-between">
                    <ReviewStar key={product._id} rating={product.rating} numOfReview={product.numReviews}/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
 
export default ProductCards;