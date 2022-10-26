import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { toast } from 'react-hot-toast';

 const Login = () => {
   
 const {LogIn} = useContext(AuthContext)
 const[error , setError] = useState('');
 const navigate = useNavigate();
 const location = useLocation();
 const from = location.state?.form?.pathname || '/';

 const handleSubmit = event =>{
     event.preventDefault();
     const form = event.target;
     const email = form.email.value;
     const password = form.password.value;
     LogIn(email, password)
     .then(result => {
         const user = result.user;
         console.log(user);
         form.reset();
         setError('');
         navigate(from, {replace:true});
     })
     .catch(error => {
        console.error(error)
        setError(error.message)
        
    })
 }

    return (
    

      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required />
     </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Text>
        New in eduLife? Please <Link to='/reg'>Register Now</Link>
      </Form.Text>
      <br />
      <Button  variant="primary" type="submit">
          Login
      </Button>
      <Form.Text className="text-danger">

      </Form.Text>
  </Form>
    );
};

export default Login;