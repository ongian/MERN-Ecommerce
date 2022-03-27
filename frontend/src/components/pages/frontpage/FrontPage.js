import React from 'react';
import ProductContainer from '../../layout/ProductContainer/ProductContainer';
const FrontPage = () => {
    return (<section className='main'>
        <ProductContainer productTitle="Featured Products" numOfSKU={7} typeOfSKU="featured" />
    </section>);
}
 
export default FrontPage;