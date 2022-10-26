import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
const CourseDetails = ({category}) => {

        const{name , total , logo , buy } = category;
    return (
        <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {total}
          </Card.Text>
          <img src={logo} alt="" />
          <Button variant="primary"></Button>
        </Card.Body>
        <Card.Footer className="text-muted">Buy Now</Card.Footer>
      </Card>
    );
};

export default CourseDetails;