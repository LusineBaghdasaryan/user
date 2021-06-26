import React, {useEffect, useState} from 'react';
import {Card, Button, InputGroup, FormControl} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from '../redux/actions'

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const {success,userId,token} = useSelector(state => state);
    
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }
    
    
    const onSubmit = (data) => {
        dispatch(login(data));
    }
    
    
    useEffect(()=>{
        if (success) {
            history.push('/profile');
            localStorage.setItem("userData",JSON.stringify({userId,token}));
        }
    },[success]);
    
    return (
            <Card style={{width: '18rem'}}>
                <Card.Body className='text-center'>
                    <Card.Title>Login</Card.Title>
                    <Card.Text>
                        <InputGroup className="mb-3">
                            <FormControl
                                    placeholder="Email"
                                    aria-label="Email"
                                    aria-describedby="basic-addon2"
                                    name='email'
                                    onChange={handleChange}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                                    placeholder="Password"
                                    aria-label="Password"
                                    aria-describedby="basic-addon2"
                                    name='password'
                                    onChange={handleChange}
                            />
                        </InputGroup>
                    </Card.Text>
                    <Button variant="primary" onClick={() => onSubmit(userData)}>Login</Button>
                    <div>
                        <Link to="/register" className='text-danger'>Go to registration!</Link>
                    </div>
                </Card.Body>
            </Card>
    );
}

export default Login;
