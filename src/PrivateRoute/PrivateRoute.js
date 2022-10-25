import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/Authprovider';
import { Spinner } from 'react-bootstrap';
const PrivateRoute = ({children}) => {
    const{user , loading} = useContext(AuthContext);
    const location = useLocation();
    if(!user){
      return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    if(loading){
      return  <Spinner animation="border" role="status"></Spinner>
    }
    return children;
  };

export default PrivateRoute;