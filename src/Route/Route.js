import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PageNotFound from '../Component/PageNotFound/PageNotFound';
import Blog from '../Component/Pages/Blog/Blog';
import Course from '../Component/Pages/course/Course';
import Courses from '../Component/Pages/Courses/Courses';
import CourseDetails from '../Component/Pages/CourseDetails/CourseDetails';
import Home from '../Component/Pages/Home/Home';
import Login from '../Component/Pages/Login/Login';
import Register from '../Component/Pages/Register/Register';
import Terms from '../Component/Pages/Register/Terms';
import Main from '../Layout/Main';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Category from '../Component/Pages/Category/Category';


const router = createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>,
        children:[
          {
        
              path:'/',
              loader:()=>fetch('https://learning-platform-server-saima-sawrin.vercel.app/coursesInfo'),
              element: <Home></Home>
          
          },
          {
            path:'/courses',
            loader:()=>fetch('https://learning-platform-server-saima-sawrin.vercel.app/coursesInfo'),
            element: <Course></Course>

          },
          {
            path:'/courses/:id',
            loader:({params})=>fetch(`https://learning-platform-server-saima-sawrin.vercel.app/courses/${params.id}`),
            element: <PrivateRoute><Category></Category></PrivateRoute>
          },
         
          {
            path:'/blog',
            element: <Blog></Blog>
          },
          {
            path:'/terms',
            element: <Terms></Terms>
          },
         
            {
               path:'/login',
               element: <Login></Login>
            },
            {
               path:'/reg',
               element: <Register></Register>
            }
        ]
      },
        {
          path:'*',
          element: <PageNotFound></PageNotFound>
        }
      
    ])


export default router;