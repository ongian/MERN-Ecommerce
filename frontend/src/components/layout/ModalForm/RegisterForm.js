import React, {useState, useEffect} from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../actions/userAction';
import AlertMessage from '../AlertMessage/AlertMessage';
const RegisterForm = ({modalStatus}) => {

    const dispatch = useDispatch();
    const {loading, error} = useSelector(state => state.login)
    const [userLogin, setUserLogin] = useState({
        name: '',
        email: '',
        password: ''
    })
    const {name, email, password} = userLogin;

    useEffect(() => {
        if(modalStatus === false) {
            setUserLogin(state => {
                return {
                    name: '',
                    email: '',
                    password: ''
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
        console.log(userLogin)
    }
    
    const onRegister = (e) => {
        e.preventDefault()
        dispatch(register(name, email, password));
        console.log(userLogin)
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
                            className="form-control"
                            value={name} 
                            onChange={(e) => onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            name="email" 
                            type="email" 
                            placeholder="Email Address" 
                            className="form-control"
                            value={email} 
                            onChange={(e) => onChange(e)}
                        />
                    </div>
                    <div className="form-group py-2">
                        <input 
                            name="password" 
                            type="password"  
                            placeholder="Enter Password" 
                            className="form-control"
                            value={password}
                            onChange={(e) => onChange(e)} 
                        />
                    </div>
                    <div className="form-group">
                        <Button variant="primary" type="submit" onClick={onRegister}>{loading ? 'Loading...' : 'Register'}</Button>
                    </div>
                </Container>
            </Form> 
    );
}
 
export default RegisterForm;