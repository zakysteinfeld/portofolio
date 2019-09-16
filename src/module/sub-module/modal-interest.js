import React, { Component } from 'react';
import { Modal, Row, Col, Carousel } from 'antd';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from 'mdbreact';
import Fade from 'react-reveal/Fade';
import Img1 from './../../assets/img/madden19.jpg';
import Img2 from './../../assets/img/flagfootball.jpg';
import Img3 from './../../assets/img/jiwarudays.jpg';
import Img4 from './../../assets/img/applemusic.png';
import Img5 from './../../assets/img/singout.jpg';

export default class ModalInterest extends Component {
    render() {
        const { status, toggle, lang } = this.props;
        return (
            <Modal
                title={ lang === 'ja' ? '興味' : 'Interest' }
                centered
                visible={status}
                onCancel={() => {
                    toggle('Interest')
                } }
                footer={null}
                width={900}
                keyboard={true}
            >
                <div className='font-lexend-deca'>
                    <Row>
                        <Col className=''>
                            <Carousel autoplay>
                                <div className='car-img-div'>
                                    <img src={Img1} className='car-img-height' />
                                </div>
                                <div className='car-img-div'>
                                    <img src={Img2} className='car-img-height' />
                                </div>
                                <div className='car-img-div'>
                                    <img src={Img3} className='car-img-height' />
                                </div>
                                <div className='car-img-div'>
                                    <img src={Img5} className='car-img-height' />
                                </div>
                                <div className='car-img-div'>
                                    <img src={Img4} className='car-img-height' />
                                </div>
                            </Carousel>
                        </Col>
                    </Row>
                </div>
            </Modal>
        )
    }
}