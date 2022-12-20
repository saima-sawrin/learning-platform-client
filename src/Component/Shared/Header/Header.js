import React from 'react';
import { useContext } from 'react';
import {Image, Button, Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import LeftSide from '../LeftSide/LeftSide';
import { FaUser } from 'react-icons/fa';
import ReactSwitch from "react-switch";
import { createContext, useState } from "react";
import PDFFile from '../../PDFFile/PDFFile';
export const ThemeContext = createContext(null);

const Header = () => {

  const {user , LogOut} = useContext(AuthContext);
  // const [theme, setTheme] = useState("dark");

  // const toggleTheme = () => {
  //   setTheme((curr) => (curr === "light" ? "dark" : "light"));
  // };

  const handleLogOut =()=>{
    LogOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }
    return (
      
        <div className='mb-3 main'>
        
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container  >
      <Navbar.Brand> <img style={{ height: '40px' }} src="edu.png" alt="" /> <Link className='text-decoration-none' to='/'>eduLife</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav ">
        <Nav className="me-auto ms-5  ">
        
          <Link className='text-decoration-none mx-4' to='/courses'>Courses</Link>
          <Link className='text-decoration-none mx-4' to='/faq'>FAQ</Link>
          <Link className='text-decoration-none mx-4' to='/blog'>Blog</Link>
      
       
       {/* <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
         
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
    */}
        </Nav>
        <Nav>
          <>
            {
              user?.uid ?
              <>
                  <Button  className='text-decoration-none mx-3 text-' variant="light" onClick={handleLogOut}>Log out</Button>
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
                                  title= {user.displayName}
                                  src={user.photoURL}>
                              </Image>
                       
                              : <FaUser></FaUser>
                          }
          </Nav.Link>
        </Nav>
   
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