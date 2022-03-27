import React from 'react';
import {Spinner} from 'react-bootstrap'

const Loader = () => {
    return <Spinner animation="border" variant="secondary" style={{
        margin: 'auto',
        width: '150px',
        height: '150px',
        display: 'block'
    }}/>;
}
 
export default Loader;