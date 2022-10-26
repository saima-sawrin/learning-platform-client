import React ,{ useState }from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './course.css';

const CourseDetails = ({category}) => {
        const{name , total , logo , buy } = category;
       

    return (
        <Card className="text-center">
        <Card.Header className='text-bold'>
        {name}
        </Card.Header>
        <Card.Body>
          <Card.Title>$ {total}</Card.Title>
          {/* <Card.Text>
            {total}
          </Card.Text> */}
          <img className='thumbnail' src={logo} alt="" />
          
        </Card.Body>
        <Card.Footer className="text-muted"><Button  variant="primary">Download PDF</Button></Card.Footer>
      </Card>
    );
};

export default CourseDetails;