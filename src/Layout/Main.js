import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Shared/Footer/Footer';
import Header from '../Component/Shared/Header/Header';
import LeftSide from '../Component/Shared/LeftSide/LeftSide';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                   <Col lg='4' className='d-none d-lg-block'>
                   <LeftSide></LeftSide>
                   </Col>
                   
                    <Col lg='8'>
                    <Outlet></Outlet>
                    </Col>
                    
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;