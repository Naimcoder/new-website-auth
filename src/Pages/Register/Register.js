import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Shared/Context/UserContext';

const Register = () => {

    const {signIn,updateProfile}=useContext(AuthContext)
    const [error,setError]=useState('')
    const [accept,setAccept]=useState(false)
    const handleSubmit=(event)=>{
      event.preventDefault()
      const from= event.target;
      const name = from.name.value;
      const email= from.email.value;
      const password= from.password.value;
      const PhotoURL=from.PhotoURL.value;
      // console.log(name,PhotoURL,email,password)
      signIn(email,password)
      .then(result=>{
        const user= result.user
        console.log(user)
        from.reset()
        profileName(name,PhotoURL)
      })
      .catch(error=>{
        console.error(error)
        setError(error.message)
      })
    }
    const handleAccept=(event)=>{
      setAccept(event.target.checked)
    }
    const profileName=(name,PhotoURL)=>{

      const profile={
        displayName:name,
        PhotoURL:PhotoURL
      }
      updateProfile(profile)
      .then(()=>{

      })
      .catch (error=>console.error(error))
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        onClick={handleAccept}
        type="checkbox"
         label={<>Accept<Link to='/terms'>Terms and conditions</Link></>} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accept}>
        Registet
      </Button>
       <Form.Text className='text-danger'>
         {error}
      </Form.Text>
    </Form>
    );
};

export default Register;