import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';
const Category = () => {
    const categories = useLoaderData();
    return (
      <div>
        <h3>Total Course: {categories.length}</h3>
        {
            categories.map(category => 
            <CourseDetails 
            key={category.id} 
            category={category}>    
            </CourseDetails>)
        }
      </div>
    );
};

export default Category;