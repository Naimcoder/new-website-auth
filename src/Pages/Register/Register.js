import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../Shared/Context/UserContext';

const Register = () => {

    const {signIn}=useContext(AuthContext)
    const [error,setError]=useState('')
    const handleSubmit=(event)=>{
      event.preventDefault()
      const from= event.target;
      const name = from.name.value;
      const email= from.email.value;
      const password= from.password.value;
      const photoUrl=from.PhotoURL.value;
      console.log(name,photoUrl,email,password)
      signIn(email,password)
      .then(result=>console.log(result.user))
      .catch(error=>{
        console.error(error)
        setError(error.message)
      })
    }
    return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="name"  placeholder="Your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="PhotoURL" type="PhotoURL"  placeholder="PhotoURL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Registet
      </Button>
       <Form.Text className='text-danger'>
         {error}
      </Form.Text>
    </Form>
    );
};

export default Register;