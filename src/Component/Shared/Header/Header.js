import React from 'react';
import { useContext } from 'react';
import {Image, Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import LeftSide from '../LeftSide/LeftSide';
import { FaUser } from 'react-icons/fa';
import { hover } from '@testing-library/user-event/dist/hover';


const Header = () => {
  const {user , LogOut} = useContext(AuthContext);

  const handleLogOut =()=>{
    LogOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }
    return (
        <div className='mb-3'>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container  >
      <Navbar.Brand> <img style={{ height: '40px' }} src="edu.png" alt="" /> <Link className='text-decoration-none' to='/'>eduLife</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav ">
        <Nav className="me-auto ms-5  ">
        
          <Link className='text-decoration-none mx-4' to='/courses'>Courses</Link>
          <Link className='text-decoration-none mx-4' to='/faq'>FAQ</Link>
          <Link className='text-decoration-none mx-4' to='/blog'>Blog</Link>
        
          {/* <Link className='text-decoration-none mx-4' to='/login'>Login</Link>
          <Link className='text-decoration-none mx-4' to='/reg'>Register</Link> */}
      
        </Nav>
        <Nav>
          <>
            {
              user?.uid ?
              <>
                  <span>{user?.displayName}</span>
                  <Button variant="light" onClick={handleLogOut}>Log out</Button>
              </>
              :
              <>
                  <Link className='text-decoration-none  mx-3' to='/login'>Login</Link>
                  <Link className='text-decoration-none  mx-3' to='/reg'>Register</Link>
              </>
          }
          </>
          <Nav.Link  >
          {user?.photoURL?
                          
                              <Image
                                  style={{ height: '30px' }}
                                  roundedCircle
                                  hover= {user.displayName}
                                  src={user.photoURL}>
                              </Image>
                       
                              : <FaUser></FaUser>
                          }
          </Nav.Link>
        </Nav>
        <div className='d-lg-none'>
  
   </div>
      <div className='d-lg-none'>
      <LeftSide></LeftSide>
      </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   
      </div>
    );
};

export default Header;