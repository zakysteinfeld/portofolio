import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Popover } from 'antd';
import Divider from '@material-ui/core/Divider';
import { ModalInfo } from './../component/custom-modal';
import Img1 from './../assets/img/Astra-International.png';
import Img2 from './../assets/img/Boga-Group.png';
import Img3 from './../assets/img/Anabatic.png';

export default class EduCareer extends Component {
    render() {
        const PopoverContent = (
            <div>
                <p>Content</p>
                <p>Content</p>
            </div>
        )
        return(
            <div className='shadow' style={{ backgroundColor: '#f9ab00', paddingTop: '4%' }}>
                <div className='about-me'>
                    <text>Project</text>
                </div>
                <div style={{ marginTop: '3%' }}>
                    <Row className='center-pos' style={{ width: '60%', margin: 'auto', paddingBottom: '6%', textAlign: 'center' }}>
                        <Col md={4} style={{ marginTop: '1%' }}>
                            <div className='card shadow' onClick={ () => ModalInfo(1)}>
                                <img src={Img1} alt={'PT Astra International Tbk'} style={{ width: '100%', margin: 'auto' }} />
                                <Divider />
                                <text className='project-name'>Portal AHASS</text>
                            </div>
                        </Col>
                        <Col md={4} style={{ marginTop: '1%' }}>
                            <div className='card shadow' onClick={ () => ModalInfo(2)}>
                                <img src={Img2} alt={'Boga Group'} style={{ width: '50.5%', margin: 'auto' }} />
                                <Divider />
                                <text className='project-name'>Boga Royalty Apps</text>
                            </div>
                        </Col>
                        <Col md={4} style={{ marginTop: '1%' }}>
                            <div className='card shadow' onClick={ () => ModalInfo(3)}>
                                <img src={Img3} alt={'PT Anabatic Thecnologies Tbk'} style={{ width: '75%', margin: 'auto' }} />
                                <Divider />
                                <text className='project-name'>PocketBank-Merchant</text>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}