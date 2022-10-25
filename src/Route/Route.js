import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PageNotFound from '../Component/PageNotFound/PageNotFound';
import Login from '../Component/Pages/Login/Login';
import Main from '../Layout/Main';


const router = createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>,
        children:[
            {
               path:'/login',
               element: <Login></Login>
            },
            {
               path:'/login',
               element: <Login></Login>
            }
        ]
      },
        {
          path:'*',
          element: <PageNotFound></PageNotFound>
        }
      
    ])


export default router;