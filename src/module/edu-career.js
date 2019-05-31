import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Divider from '@material-ui/core/Divider';

export default class EduCareer extends Component {
    render() {
        return(
            <div className='shadow-layout' style={{ backgroundColor: '#50b46b', paddingTop: '4%' }}>
                <div className='about-me'>
                    <text>Education & Career</text>
                </div>
                <div style={{ marginTop: '3%' }}>
                    <Row className='center-pos' style={{ width: '60%', margin: 'auto', paddingBottom: '6%' }}>
                        <Col md={6} style={{ marginTop: '2%' }}>
                            <div className='card shadow'>
                                <div>
                                    <text><b>Education</b></text>
                                </div>
                                <div className='career-edu-div'>
                                    <Divider />
                                </div>
                                <div>
                                    <text><b>2014 - 2017</b> <b style={{ color: '#007bff' }}>/</b><b style={{ color: '#f0ab00' }}>/</b> <br/> <b style={{ color: '#f0ab00' }}>・</b>SMK Negeri 4 Bandung</text>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} style={{ marginTop: '2%' }}>
                            <div className='card shadow'>
                                <div>
                                    <text><b>Career</b></text>
                                </div>
                                <div className='career-edu-div'>
                                    <Divider />
                                </div>
                                <div>
                                    <text><b>2016</b> <b style={{ color: '#007bff' }}>/</b><b style={{ color: '#f0ab00' }}>/</b> Intern. Web Developer<br/> <b style={{ color: '#f0ab00' }}>・</b>PT Bandung International Aviation</text><br/>
                                    <text><b>2017 - Present</b> <b style={{ color: '#007bff' }}>/</b><b style={{ color: '#f0ab00' }}>/</b> .NET Developer<br/> <b style={{ color: '#f0ab00' }}>・</b>PT Walden Global Services</text><br/>
                                    <text><b>2019 - Present</b> <b style={{ color: '#007bff' }}>/</b><b style={{ color: '#f0ab00' }}>/</b> Front-end Developer<br/> <b style={{ color: '#f0ab00' }}>・</b>PT Walden Global Services</text><br/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}