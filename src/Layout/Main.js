import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Shared/Footer/Footer';
import Header from '../Component/Shared/Header/Header';
import LeftSide from '../Component/Shared/LeftSide/LeftSide';
import RightSide from '../Component/Shared/RightSide/RightSide';
import '../App.css'
const Main = () => {
    return (
        <div className='main'>
            <Header></Header>
            <Container>
                <Row >
                   <Col lg='2' className='d-none d-lg-block'>
                   <LeftSide></LeftSide>
                   </Col>
                   
                    <Col lg='7' >
                    <Outlet></Outlet>
                    </Col>
                    
                    <Col lg='3' >
                   <RightSide></RightSide>
                    </Col>
                    
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;