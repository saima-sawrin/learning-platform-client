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
                   <Col lg='3' className='d-none d-lg-block'>
                   <LeftSide></LeftSide>
                   </Col>
                   
                    <Col lg='9' >
                    <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
       
    );
};

export default Main;