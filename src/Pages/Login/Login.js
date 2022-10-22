import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../Shared/Context/UserContext';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
const navigate =useNavigate();
const location = useLocation();
const {logIn}= useContext(AuthContext)
const [error,setError]=useState(' ')
const from= location.state?.from?.pathname || '/';

     const handleSubmit=(event)=>{
      event.preventDefault()
      const from= event.target;
      const email= from.email.value;
      const password= from.password.value;
      console.log(email,password)
      logIn(email,password)
      .then(result=>{
        const user= result.user
        console.log(user)
        setError('')
        from.reset();
        Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
)
navigate(from,{ replace:true})
      })
      .catch(error=>{
        console.error(error)
        setError(error.masseage)
      })
    }
    return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <Form.Text className='text-danger'>
         {error}
      </Form.Text>
    </Form>
    );
};

export default Login;