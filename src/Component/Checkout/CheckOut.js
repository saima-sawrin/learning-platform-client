import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Container from 'react-bootstrap/Container';
import { Form , Button} from 'react-bootstrap';
import { useState } from 'react';
import { useRef } from 'react';
const CheckOut = () => {
    const {user } = useContext(AuthContext);
    console.log(user);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(photoURLRef.current.value);
    }

    const handleNameChange = e =>{
        setName(e.target.value)
    }
    return (

     <div>
      <h3>User Profile Information</h3>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Name</Form.Label>
          <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="Photo URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
          Submit
      </Button>
  </Form>

     </div>

    );
};

export default CheckOut;