import React, {useState} from 'react';
import {Modal, Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
const ModalForms = (props) => {
    const [form, setForm] = useState('LOGIN');
    return (
        <>
            <Modal
                show={props.show}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={props.closemodal}
                >
                <FontAwesomeIcon icon={faRectangleXmark} className="text-danger" onClick={props.closemodal} />
                {form === 'LOGIN' && <LoginForm modalStatus={props.show}/>}
                {form === 'REGISTER' && <RegisterForm modalStatus={props.show}/>}
                <div className="px-3 pb-4">
                    <Container>
                        {form !== 'LOGIN' && <span className="form-link" onClick={() => setForm('LOGIN')}>Login</span> }&nbsp;
                        {form !== 'REGISTER' && <span className="form-link" onClick={() => setForm('REGISTER')}>Register</span>}&nbsp;
                        {form !== 'FORGOT' && <span className="form-link" onClick={() => setForm('FORGOT')}> Forgot password?</span>}
                    </Container>
                </div>
            </Modal>
        </>
    );
}
 
export default ModalForms;