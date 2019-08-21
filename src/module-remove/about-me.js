import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';

export default class AboutMe extends Component {
    render() {
        return(
            <div style={{ backgroundColor: '#ffffff', paddingTop: '4%' }}>
                <Fade bottom>
                    <div className='about-me'>
                        <text>About me</text>
                    </div>
                </Fade>
                <Fade bottom>
                    <div style={{ marginTop: '3%' }}>
                        <Row className='center-pos' style={{ width: '60%', margin: 'auto', paddingBottom: '6%' }}>
                            <Col>
                                <div className='card shadow' style={{ textAlign: 'justify' }}>
                                    <text>&nbsp;&nbsp;&nbsp;&nbsp;Hello there, my name is Muhamad Zaky, I am a Front-end Developer, and previously was a .NET Developer. 
                                        I work on PT Walden Global Services Head Office in Bandung, Indonesia currently. Coding has been my job since 2 years ago. 
                                        I am a graduate of SMK Negeri 4 Bandung majoring in Software Engineering.</text>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Fade>
            </div>
        );
    }
}