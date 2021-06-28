import {useEffect, useState} from 'react';
import {Button, Card, FormControl, InputGroup} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../redux/actions";
import type {IUserRegisterData} from '../interfaces'

const Register = () => {
    const dispatch = useDispatch();
    const {success} = useSelector(state => state);

    const [userData, setUserData] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    const history = useHistory();

    const onSubmit = (data: IUserRegisterData) => {
        dispatch(register(data));
    }

    useEffect(() => {
        if (success) {
            history.push('/login');
        }
    }, [success]);


    return (
        <Card style={{width: '18rem'}}>
            <Card.Body className='text-center'>
                <Card.Title>Registration</Card.Title>
                <Card.Text>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Name"
                            aria-label="Name"
                            aria-describedby="basic-addon2"
                            name='name'
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Surname"
                            aria-label="Surname"
                            aria-describedby="basic-addon2"
                            name='surname'
                            onChange={handleChange}
                        />
                    </InputGroup>
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
                <Button variant="primary" onClick={() => onSubmit(userData)}>Registration</Button>
                <div>
                    <Link to="/login" className='text-danger'>Go to login!</Link>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Register;
