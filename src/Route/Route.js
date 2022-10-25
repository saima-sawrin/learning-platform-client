import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PageNotFound from '../Component/PageNotFound/PageNotFound';
import Courses from '../Component/Pages/Courses/Courses';
import Home from '../Component/Pages/Home/Home';
import Login from '../Component/Pages/Login/Login';
import Register from '../Component/Pages/Register/Register';
import Main from '../Layout/Main';


const router = createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>,
        children:[
          {
        
              path:'/',
              loader:()=>fetch('http://localhost:5000/news'),
              element: <Home></Home>
          
          },
           {
             path:'/courses',
        
             element: <Courses></Courses>

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