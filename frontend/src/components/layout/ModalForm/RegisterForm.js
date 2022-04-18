import React, {useState, useEffect} from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../actions/userAction';
import AlertMessage from '../AlertMessage/AlertMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { validateRegConfirmPass, validateRegEmail, validateRegUser, validateRegPass } from '../../../actions/formValidationAction';
const RegisterForm = ({modalStatus}) => {

    const dispatch = useDispatch();
    const {loading, error} = useSelector(state => state.register);
    const regForm = useSelector(state => state.registerValidation);
    const [passType, setPassType] = useState({
        password: 'password',
        confirmPassword: 'password'
    })
    const [userLogin, setUserLogin] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const {name, email, password, confirmPassword} = userLogin;

    useEffect(() => {
        if(modalStatus === false) {
            setUserLogin(state => {
                return {
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }
            });
        }
    }, [modalStatus])
    const onChange = (e) => {
        setUserLogin((state) => {
            return  {
                ...state,
                [e.target.name]: e.target.value
            }
        })
    }
    const showPassword = (field) => {
        setPassType((state) => {
            return {
                ...state,
                [field]: state[field] === 'password' ? 'text' : 'password'
            }
        })
    }
    const onRegister = (e) => {
        e.preventDefault();
        if(regForm.username.valid && regForm.email.valid && regForm.password.valid && regForm.confirmPassword.valid){
            dispatch(register(name, email, password));
        } else {
            dispatch(validateRegUser(name))
            dispatch(validateRegEmail(email))
            dispatch(validateRegPass(password))
            dispatch(validateRegConfirmPass(password, confirmPassword))
        }
    }

    return ( <Form className="px-3">
                <Container>
                    <h3 className="text-center pt-4">Register</h3>
                    {error && <AlertMessage>{error}</AlertMessage>}
                    <div className="form-group py-2">
                        <input 
                            name="name" 
                            type="text" 
                            placeholder="Username" 
                            className={`form-control ${regForm.username.error && 'is-invalid border-danger'}`}
                            value={name} 
                            onChange={(e) => onChange(e)}
                            onBlur={(e) => dispatch(validateRegUser(e.target.value))}
                        />
                        {regForm.username.error && <div className="d-block invalid-feedback">{regForm.username.error}</div>}
                    </div>
                    <div className="form-group">
                        <input 
                            name="email" 
                            type="email" 
                            placeholder="Email Address" 
                            className={`form-control ${regForm.email.error && 'is-invalid border-danger'}`}
                            value={email} 
                            onChange={(e) => onChange(e)}
                            onBlur={(e) => dispatch(validateRegEmail(e.target.value))}
                        />
                        {regForm.email.error && <div className="d-block invalid-feedback">{regForm.email.error}</div>}
                    </div>
                    <div className="form-group py-2 position-relative">
                        <input 
                            name="password" 
                            type={passType.password}  
                            placeholder="Enter Password" 
                            className={`form-control ${regForm.password.error && 'border-danger'}`}
                            value={password}
                            onChange={(e) => onChange(e)}
                            onBlur={(e) => dispatch(validateRegPass(e.target.value))}
                        />
                        {regForm.password.error && <div className="d-block invalid-feedback">{regForm.password.error}</div>}
                        <span className="checkPass position-absolute">
                            {passType.password === 'text' ? <FontAwesomeIcon icon={faEye} onClick={() => showPassword('password')} /> : <FontAwesomeIcon icon={faEyeSlash} onClick={() => showPassword('password')} />}
                        </span>
                    </div>
                    <div className="form-group position-relative">
                        <input 
                            name="confirmPassword" 
                            type={passType.confirmPassword}  
                            placeholder="Confirm Password" 
                            className={`form-control ${regForm.confirmPassword.error && 'border-danger'}`}
                            value={confirmPassword}
                            onChange={(e) => onChange(e)}
                            onBlur={(e) => dispatch(validateRegConfirmPass(password, e.target.value))}
                        />
                        {regForm.confirmPassword.error && <div className="d-block invalid-feedback">{regForm.confirmPassword.error}</div>}
                        <span className="checkPass position-absolute">
                            {passType.confirmPassword === 'text' ? <FontAwesomeIcon icon={faEye} onClick={() => showPassword('confirmPassword')} /> : <FontAwesomeIcon icon={faEyeSlash} onClick={() => showPassword('confirmPassword')} />}
                        </span>
                    </div>
                    <div className="form-group py-2">
                        <Button variant="primary" type="submit" onClick={onRegister}>{loading ? 'Loading...' : 'Register'}</Button>
                    </div>
                </Container>
            </Form> 
    );
}
 
export default RegisterForm;