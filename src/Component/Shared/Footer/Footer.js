import React from 'react';
import { FaFacebook  , FaInstagram , FaGoogle , FaTwitter , FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
    return (
     <div  className=' text-center py-4 bg-dark text-white mt-4 '>
    <p> © 2020 Copyright Saima Sawrin.<span>All Rights Reserved</span></p>
     <div variant="bottom" >
        <FaFacebook className='me-3'></FaFacebook>
        <FaInstagram className='me-3'></FaInstagram>
        <FaTwitter className='me-3'></FaTwitter>
        <FaWhatsapp className='me-3'></FaWhatsapp>
        <FaGoogle className='me-3'></FaGoogle>
    </div>     
     </div>
    );
};

export default Footer;