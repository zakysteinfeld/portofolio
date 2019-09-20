import React, { Component } from 'react';
import { Modal, Row, Col, Carousel, Icon } from 'antd';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from 'mdbreact';
import Fade from 'react-reveal/Fade';
import Img1 from './../../assets/img/madden19-s.jpg';
import Img2 from './../../assets/img/flagfootball-s.jpg';
import Img3 from './../../assets/img/Sustainable-s.jpg';
import Img4 from './../../assets/img/applemusic-s.jpg';
import Img5 from './../../assets/img/Yoake Made Tsuyogaranakutemo Ii-s.jpg';
import Divider from '@material-ui/core/Divider';

export default class ModalInterest extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.carousel = React.createRef();
    }
    next() {
        this.carousel.next();
    }
    previous() {
        this.carousel.prev();
    }
    
    render() {
        const { status, toggle, lang } = this.props;
        const carouselSettings = {
            autoplay: true,
            infinite: true,
            dots: true,
            effect: 'fade',
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            dragable: true,
        }
        return (
            <Modal
                // title={lang === 'ja' ? '興味' : 'Interest'}
                centered
                visible={status}
                onCancel={() => {
                    toggle('Interest')
                }}
                footer={null}
                keyboard={true}
                closable={false}
                className={'modal-interest'}
            >
                <div className='font-lexend-deca'>
                    <Row>
                        <div>
                            <div>
                            {
                                lang === 'ja' ? '興味' : 'Interest'
                            }
                            </div>
                        </div>
                    </Row>
                    <Row className='divider'>
                        <Divider />                    
                    </Row>
                    <Row>
                        <Col span={1} className='carousel-arrow-icon'>
                            <Icon type="left-circle" onClick={this.previous} />
                        </Col>
                        <Col span={22} className=''>
                            <Carousel ref={node => (this.carousel = node)} {...carouselSettings}>
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
                        <Col span={1} className='carousel-arrow-icon'>
                            <Icon type="right-circle" onClick={this.next} />
                        </Col>
                    </Row>
                </div>
            </Modal>
        )
    }
}