import React from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './Courses.css';


const Courses = ({course}) => {
  const {course_id,name, logo, total , buy } = course;

    return (
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body className="cardCon" >
        <Card.Title>{name}</Card.Title>
     
          <h3>$ {total}</h3>
       <ButtonGroup vertical className='d-inline'>
       <Button  variant="primary" ><Link className='text-white text-decoration-none ' to={`/courses/${course_id}`}>See Details</Link></Button>
     
       </ButtonGroup>
       
      </Card.Body>
    </Card>
    );
};

export default Courses;