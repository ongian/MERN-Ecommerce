import React, {useState, useEffect} from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../actions/userAction';
import AlertMessage from '../AlertMessage/AlertMessage';
const LoginForm = ({modalStatus}) => {

    const dispatch = useDispatch();
    const {loading, error} = useSelector(state => state.login)
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
    
    const onLogin = (e) => {
        e.preventDefault()
        dispatch(login(email, password));
        console.log(userLogin)
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
                        <Button variant="primary" type="submit" onClick={onLogin}>{loading ? 'Loading...' : 'Login'}</Button>
                    </div>
                </Container>
            </Form> 
    );
}
 
export default LoginForm;