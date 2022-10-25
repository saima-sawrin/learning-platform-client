import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../course/Course';


const Courses = ({course}) => {
  const {name, logo, total , buy } = course;

    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          $ {total}
        </Card.Text>
        <Button variant="primary" size='lg'>{buy}</Button>
      </Card.Body>
    </Card>
    );
};

export default Courses;