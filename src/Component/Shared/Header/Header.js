import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mb-3'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand><Link to='/'>eduLife</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link >All News</Nav.Link>
          <Nav.Link >Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item >Action</NavDropdown.Item>
            <NavDropdown.Item >
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item >Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item >
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
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