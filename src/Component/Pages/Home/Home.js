import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import './Home.css'
const Home = () => {
    const allCourses = useLoaderData();
    return (
        <div className='allCourse'>
            
            {
                allCourses.map(course => <Courses
                    key={course.id}
                    course={course}></Courses>)
            }
        </div>
    );
};

export default Home;