import React, {useState, useEffect} from 'react';
import {Modal, Form, Button, Container} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../actions/userAction';
import AlertMessage from '../../layout/AlertMessage/AlertMessage';
const LoginModal = (props) => {

    const dispatch = useDispatch();
    let {loading, userData, error} = useSelector(state => state.login)
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    })
    const {email, password} = userLogin;

    useEffect(() => {
        if(props.show === false) {
            setUserLogin(state => {
                return {
                    email: '',
                    password: ''
                }
            });
        }
    }, [props.show, error])
    const onChange = (e) => {
        setUserLogin((state) => {
            return  {
                ...state,
                [e.target.name]: e.target.value
            }
        })
        console.log(userLogin)
    }
    
    const onLogin = (e) => {
        e.preventDefault()
        dispatch(login(email, password));
        console.log(userLogin)
    }
    
    return (
        <>
            <Modal
                show={props.show}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={props.closemodal}
                >
                
                <Form className="p-3">
                    <Container>
                        <h2>Login</h2>
                        {error && <AlertMessage>{error}</AlertMessage>}
                        <div className="form-group py-2">
                            <input 
                                name="email" 
                                type="email" 
                                placeholder="Email Address" 
                                className="form-control"
                                value={email} 
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                name="password" 
                                type="password"  
                                placeholder="Enter Password" 
                                className="form-control"
                                value={password}
                                onChange={(e) => onChange(e)} 
                            />
                        </div>
                        <div className="form-group py-2">
                            <Button variant="danger" onClick={props.closemodal} className="me-1">Close</Button>
                            <Button variant="primary" type="submit" onClick={onLogin}>{loading ? 'Loading...' : 'Login'}</Button>
                        </div>
                        <div>
                            <span>Forgot password?</span>
                            <span>|</span>
                            <span>Register</span>
                        </div>
                    </Container>
                </Form>
            </Modal>
        </>
    );
}
 
export default LoginModal;