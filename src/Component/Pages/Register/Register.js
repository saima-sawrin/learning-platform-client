import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button  , ButtonGroup} from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../context/AuthProvider';
import { FaGoogle , FaGithub } from "react-icons/fa";

const Register = () => {

    const {createUser , profileUpdate , verifyEmail , signIN} = useContext(AuthContext);
    const[error , setError] = useState('');
    const[accepted , setAccepted] = useState(false);
      
 const googleProvider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider()

 const navigate = useNavigate();
 const location = useLocation();
 const from = location.state?.from?.pathname || '/';
    
     const handleSubmit = event => {
         event.preventDefault();
         const form = event.target;
         const name = form.name.value;
         const photoURL = form.photoURL.value;
         const email = form.email.value;
         const password = form.password.value;
         console.log(name, photoURL, email, password);
        
         createUser(email, password)
         .then( result => {
             const user = result.user;
             alert('Please Verify your email before login');
             console.log(user);
             form.reset();
             handleUpdateProfile(name , photoURL)
             handleEmailVerification();
             alert('Successfully Registered')
            
             
         })
         .catch( e => {
             alert(e)
             setError(e.message)
 
         });
         
         
     }
  
     const handleUpdateProfile = (name, photoURL)=>{
         const profile = {
             displayName: name,
             photoURL : photoURL
         }
         profileUpdate(profile)
         .then(()=>{})
         .catch(error => console.error(error))
 
     }
     const handleEmailVerification  = () => {
        verifyEmail()
        .then(() =>{})
        .catch(error => console.error(error));
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
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
        <h2>Registration Here!!</h2>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>
         
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" onClick={handleAccepted}
             label= {<>Accept <Link to='/terms'>Terms & Condition</Link></>} />
        </Form.Group>

    
        <ButtonGroup vertical className='d-inline mb-2'>
        <Button className="mb-2" variant='primary' type="submit" disabled={!accepted}>
            Register
        </Button>
    
         <Button onClick={handleSignIn}  className="mb-2" variant='outline-primary'><FaGoogle></FaGoogle>  Log in with Google</Button>
         <Button  onClick={handleGithub}  variant='outline-dark'> <FaGithub></FaGithub>   Log in with Github</Button>
        </ButtonGroup>
        <br />
     
      <p>    {<>Already have an account? Please <Link to='/login'>Login</Link></>}</p>
        
        <Form.Text className="text-danger">
            {
                error
            }
        </Form.Text>
        
    </Form>
 
      </div>

    );
};

export default Register;