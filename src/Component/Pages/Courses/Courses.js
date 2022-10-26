import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../course/Course';


const Courses = ({course}) => {
  const {course_id,name, logo, total , buy } = course;

    return (
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
     
          <h3>$ {total}</h3>
       
        <Button className='mb-2 ' variant="primary" ><Link className='text-white text-decoration-none ' to={`/courses/${course_id}`}>See Details</Link></Button>
        <br />
        <a href="Output.pdf" download = "Output.pdf">
          <Button  variant="primary" >Download PDF</Button>
        </a>
      </Card.Body>
    </Card>
    );
};

export default Courses;