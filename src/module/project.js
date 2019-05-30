import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Img1 from './../assets/img/Astra-International.png';
import Img2 from './../assets/img/Boga-Group.png';
import Img3 from './../assets/img/Anabatic.png';

export default class EduCareer extends Component {
    render() {
        return(
            <div className='shadow' style={{ backgroundColor: '#f9ab00', paddingTop: '4%' }}>
                <div className='about-me'>
                    <text>Project</text>
                </div>
                <div style={{ marginTop: '3%' }}>
                    <Row className='center-pos' style={{ width: '60%', margin: 'auto', paddingBottom: '6%', textAlign: 'center' }}>
                        <Col md={4}>
                            <div className='card shadow'>
                                <img src={Img1} alt={'PT Astra International Tbk'} style={{ width: '100%', margin: 'auto' }} />
                                <text>Portal AHASS</text>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='card shadow'>
                                <img src={Img2} alt={'Boga Group'} style={{ width: '50.5%', margin: 'auto' }} />
                                <text>Boga Royalty Apps</text>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='card shadow'>
                                <img src={Img3} alt={'PT Anabatic Thecnologies Tbk'} style={{ width: '75%', margin: 'auto' }} />
                                <text>PocketBank-Merchant</text>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}