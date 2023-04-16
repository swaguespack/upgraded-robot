import React from 'react'
import {Contact} from '../../components/index'
// Style
import {Container, Row, Col} from 'react-bootstrap';
import "./about.css"

const About = () => {
    return (    
<>
     <Container className='about-page pt-5'>
        <Row xs={1} sm={1} md={2} className='g-4'>
            <Col className='bg-light p-4'>
                <h1>Meet the Artist</h1>
            </Col> 
            <Col>
                <h1>Contact</h1>
                <Contact/>
            </Col>  
        </Row>  
    </Container>
</>
    )
}
export default About