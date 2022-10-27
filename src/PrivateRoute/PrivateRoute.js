import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { Spinner } from 'react-bootstrap';
const PrivateRoute = ({children}) => {
    const{user , loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
      return  <Spinner animation="border" role="status"></Spinner>
    }
    if(!user){
      return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    
    return children;
  };

export default PrivateRoute;