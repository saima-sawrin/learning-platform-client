import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaGoogle , FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthProvider';

const RightSide = () => {
    const{signIN} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleSignIn = () =>{
      signIN(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error))
    }
    return (
        <div>
        <ButtonGroup vertical>
         <Button onClick={handleSignIn}  variant='outline-primary'><FaGoogle></FaGoogle>  Log in with Google</Button>
         <Button  variant='outline-dark'> <FaGithub></FaGithub>   Log in with Github</Button>
        </ButtonGroup>
        <div className='mt-4'>
         <h5>Find on us</h5>
         <ListGroup>
         <ListGroup.Item className='mb-2 ' ><FaFacebook> </FaFacebook> Facebook</ListGroup.Item>
         <ListGroup.Item className='mb-2 ' > <FaWhatsapp> </FaWhatsapp> Whatsapp</ListGroup.Item>
         <ListGroup.Item className='mb-2 ' > <FaTwitter> </FaTwitter> Twitter</ListGroup.Item>
         <ListGroup.Item className='mb-2 '><FaTwitch> </FaTwitch> Twitch</ListGroup.Item>
         </ListGroup>
        </div>
        {/* <BrandCarousal></BrandCarousal> */}
     </div>
    );
};

export default RightSide;