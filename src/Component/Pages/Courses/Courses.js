import React from 'react';
import { Button, Card } from 'react-bootstrap';


const Courses = ({course}) => {
    const{id ,name, logo , total ,buy} = course;

    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      
            <h3>${total}</h3>
       
        <Button  variant="primary">{buy}</Button>
      </Card.Body>
    </Card>
    );
};

export default Courses;