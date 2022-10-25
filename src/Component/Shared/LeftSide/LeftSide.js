import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';


const LeftSide = () => {
   
 const [courses , setCourses] = useState([]);
   useEffect(()=>{
    fetch('https://learning-platform-server-gamma.vercel.app/courses')
    .then(res => res.json())
    .then(data => setCourses(data));
   },[])  
  
    return (
        <div>
            <h2>Total Courses: {courses.length}</h2>
            {
                courses.map(course =>
                    <p key={course.id}>
                    <Link to={`/courses/${course.id}`}>  {course.name}</Link>
                  </p>)
            }
        </div>
    );
};

export default LeftSide;