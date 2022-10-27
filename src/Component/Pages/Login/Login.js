import React, { useContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Button, ButtonGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { FaGoogle , FaGithub } from "react-icons/fa";
import './Login.css';
import toast  from 'react-hot-toast';

 const Login = () => {
   
 const {LogIn , signIN} = useContext(AuthContext)
 
 const googleProvider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider()
 const[error , setError] = useState('');
 const navigate = useNavigate();
 const location = useLocation();
 const from = location.state?.from?.pathname || '/';


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
         navigate(from, {replace: true});
     })
     .catch(error => {
        console.error(error)
        setError(error.message)
        
    })
    
 }

 const handleSignIn = () =>{
    signIN(googleProvider)
    .then(result=> {
      const user = result.user;
     
      console.log(user);
      navigate(from, {replace:true});
    })
    .catch(error => console.error(error))
  }
  const handleGithub=()=>{
      signIN(githubProvider)
   .then(result=>{
       console.log(result.user)
       navigate(from, {replace: true});
     }).catch(error=>{
       console.log(error)
     })

   }


    return (
     <div>
        
        <h2>Login Here!!</h2>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required />
     </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required />
      </Form.Group>
    
      <Button  variant="primary" type="submit">
          Login
      </Button>
      <br />
      <Form.Text>
        New in eduLife? Please <Link to='/reg'>Register Now</Link>
      </Form.Text>
      <br />
      <Form.Text className="text-danger">
       {error}
      </Form.Text>
      <ButtonGroup vertical className='d-inline mb-2'>
         <Button onClick={handleSignIn}  className="mb-2" variant='outline-primary'><FaGoogle></FaGoogle>  Log in with Google</Button>
         <Button  onClick={handleGithub}  variant='outline-dark'> <FaGithub></FaGithub>   Log in with Github</Button>
        </ButtonGroup>

  </Form>

     </div>
  



    );
};

export default Login;