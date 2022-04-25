import React, {useState, useEffect} from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../actions/userAction';
import { validateLoginEmail, validateLoginPassword } from '../../../actions/formValidationAction';
import AlertMessage from '../AlertMessage/AlertMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { LOGIN_FAIL } from '../../../actionTypes/actionTypes';

const LoginForm = ({modalStatus}) => {

    const dispatch = useDispatch();
    const {loading, error} = useSelector(state => state.login);
    const loginForm =  useSelector(state => state.loginValidation);
    const [passType, setPassType] = useState('password')
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    })
    const {email, password} = userLogin;

    useEffect(() => {
        if(modalStatus === false) {
            setUserLogin(state => {
                return {
                    email: '',
                    password: ''
                }
            });
            dispatch({
                type: LOGIN_FAIL,
                error: ''
            })
        }
    }, [modalStatus, dispatch]);

    const onChange = (e) => {
        setUserLogin((state) => {
            return  {
                ...state,
                [e.target.name]: e.target.value
            }
        })
    }
    
    const onLogin = (e) => {
        e.preventDefault()
        if(loginForm.email.valid && loginForm.password.valid){
            dispatch(login(email, password));
        } else {
            dispatch(validateLoginEmail(email));
            dispatch(validateLoginPassword(password))
        }
    }

    const showPassword = () => {
        setPassType(state => {
            return state === 'password' ? 'text' : 'password'
        })
    }
    return ( <Form className="px-3">
                <Container>
                    <h3 className="text-center pt-4">Login</h3>
                    {error && <AlertMessage>{error}</AlertMessage>}
                    <div className="form-group py-2">
                        <input 
                            name="email" 
                            type="email" 
                            placeholder="Email Address" 
                            className={`form-control ${loginForm.email.error && 'is-invalid border-danger'}`}
                            value={email} 
                            onChange={(e) => onChange(e)}
                            onBlur={(e) => dispatch(validateLoginEmail(e.target.value))}
                        />
                        {loginForm.email.error && <div className="d-block invalid-feedback">{loginForm.email.error}</div>}
                    </div>
                    <div className="form-group position-relative">
                        <input 
                            name="password" 
                            type={passType}  
                            placeholder="Enter Password" 
                            className={`form-control ${loginForm.password.error && 'border-danger'}`}
                            value={password}
                            onChange={(e) => onChange(e)}
                            onBlur={(e) => dispatch(validateLoginPassword(e.target.value))} 
                        />
                        {loginForm.password.error && <div className="d-block invalid-feedback">{loginForm.password.error}</div>}
                        <span className="checkPass position-absolute">
                            {passType === 'text' ? <FontAwesomeIcon icon={faEye} onClick={() => showPassword()} /> : <FontAwesomeIcon icon={faEyeSlash} onClick={() => showPassword()} />}
                        </span>
                    </div>
                    <div className="form-group py-2">
                        <Button variant="primary" type="submit" onClick={onLogin}>{loading ? 'Loading...' : 'Login'}</Button>
                    </div>
                </Container>
            </Form> 
    );
}
 
export default LoginForm;