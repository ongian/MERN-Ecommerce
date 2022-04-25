import React, {useState, useEffect} from 'react';
import Shipping from '../layout/Checkout/Shipping';
import CheckoutSteps from '../layout/Checkout/CheckoutSteps';
import {Container} from 'react-bootstrap'
const Checkout = () => {
    const [steps, setSteps] = useState({
        shipping: {
            value: {},
            valid: false
        },
        paymentMethod: {
            value: {},
            valid: false
        },
        confirm: {
            valid: false
        }
    })

    const [currentStep, setCurrentStep] = useState('shipping');

    return (
        <section className="checkout">
            <Container>
                <CheckoutSteps active={currentStep} />
                {currentStep === 'shipping' && <Shipping />}
            </Container>
        </section>
    );
}
 
export default Checkout;