import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faMoneyCheckDollar, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { ProgressBar } from 'react-bootstrap';
const CheckoutSteps = ({active}) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if(active === 'shipping'){
            setProgress(0)
        } else if(active === 'payment'){
            setProgress(50)
        } else {
            setProgress(100)
        }
    }, [active])
    return (
        <div className="checkout-steps">
            <div className="progress-icons d-flex align-items-center justify-content-between">
                <FontAwesomeIcon icon={faTruck} className={active === 'shipping' ? 'text-primary' : 'text-muted'}/>
                <FontAwesomeIcon icon={faMoneyCheckDollar} className={active === 'payment' ? 'text-primary' : 'text-muted'}/>
                <FontAwesomeIcon icon={faCircleCheck} className={active === 'confirm' ? 'text-primary' : 'text-muted'}/>
            </div>
            <ProgressBar variant="success" now={progress} className="my-2" />
        </div>
    );
}
 
export default CheckoutSteps;