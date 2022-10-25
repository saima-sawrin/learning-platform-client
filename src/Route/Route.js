import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PageNotFound from '../Component/PageNotFound/PageNotFound';
import Blog from '../Component/Pages/Blog/Blog';
import Course from '../Component/Pages/course/Course';
import Courses from '../Component/Pages/Courses/Courses';
import Home from '../Component/Pages/Home/Home';
import Login from '../Component/Pages/Login/Login';
import Register from '../Component/Pages/Register/Register';
import Main from '../Layout/Main';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>,
        children:[
          {
        
              path:'/',
              loader:()=>fetch('https://learning-platform-server-gamma.vercel.app/coursesInfo'),
              element: <Home></Home>
          
          },
          {
            path:'/courses',
            loader:()=>fetch('https://learning-platform-server-gamma.vercel.app/coursesInfo'),
            element: <Course></Course>

          },
          {
            path:'/courses/:id',
            loader:({params})=>fetch(`ttps://learning-platform-server-gamma.vercel.app/coursesInfo/${params.id}`),
            element: <Course></Course>
          },
         
          {
            path:'/blog',
            element: <Blog></Blog>
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