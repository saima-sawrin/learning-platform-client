import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaGoogle , FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthProvider';

const RightSide = () => {
    const{signIN} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    const handleSignIn = () =>{
      signIN(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error))
    }
    const handleGitSignIn = () =>{
      signIN(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error))
    }
    return (
        <div>
        <ButtonGroup  horizontal>
         <Button onClick={handleSignIn}  variant='outline-primary'><FaGoogle></FaGoogle>  Log in with Google</Button>
         <Button  onClick={handleGitSignIn}  variant='outline-dark'> <FaGithub></FaGithub>   Log in with Github</Button>
        </ButtonGroup>
     
        
     </div>
    );
};

export default RightSide;