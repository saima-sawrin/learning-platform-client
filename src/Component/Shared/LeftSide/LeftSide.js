import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import './LeftSide.css';

const LeftSide = () => {
   
 const [courses , setCourses] = useState([]);
   useEffect(()=>{
    fetch('https://learning-platform-server-saima-sawrin.vercel.app/courses')
    .then(res => res.json())
    .then(data => setCourses(data));
   },[])  
  
    return (
        <div className='catContainer'>
            <h4>Total Courses: {courses.length}</h4>
            <div className='category'>
            {
                courses.map(course =>
                    <p key={course.id}>
                    <Link to={`/courses/${course.id}`}>  {course.name}</Link>
                  </p>)
            }
            </div>
         
        </div>
    );
};

export default LeftSide;