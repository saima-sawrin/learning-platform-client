import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
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
        
          <Link className='text-decoration-none mx-4' to='/login'>Login</Link>
          <Link className='text-decoration-none mx-4' to='/reg'>Register</Link>
      
        </Nav>
        {/* <Nav>
          <>
            {
              user?.uid ?
              <>
                  <span>{user?.displayName}</span>
                  <Button variant="light" onClick={handleLogOut}>Log out</Button>
              </>
              :
              <>
                  <Link className='text-decoration-none text-white ms-2' to='/login'>Login</Link>
                  <Link className='text-decoration-none text-white ms-2' to='/register'>Register</Link>
              </>
          }
          </>
          <Nav.Link eventKey={2} >
          {user?.photoURL?
                          
                              <Image
                                  style={{ height: '30px' }}
                                  roundedCircle
                                  src={user.photoURL}>
                              </Image>
                       
                              : <FaUser></FaUser>
                          }
          </Nav.Link>
        </Nav> */}
        <div className='d-lg-none'>
  
   </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   
      </div>
    );
};

export default Header;