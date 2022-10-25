import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
           <h2>Terms & Condition:</h2> 
            <ol>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
            </ol>
            <Button variant='primary'><Link className='text-decoration-none text-white' to='/reg'>Back to Home</Link></Button>
        </div>
    );
};

export default Terms;