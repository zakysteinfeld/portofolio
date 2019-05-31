import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from 'mdbreact';
import ScrollUpButton from "react-scroll-up-button";
import CustomScrollTop from './custom-scroll-top';
import Img1 from './../assets/img/madden19.jpg';
import Img2 from './../assets/img/flagfootball.jpg';
import Img3 from './../assets/img/jiwarudays.jpg';
import Img4 from './../assets/img/applemusic.png';

export default class Interest extends Component {
    render() {
        return(
            <Fragment>
                <div className='shadow-layout' style={{ backgroundColor: '#ea4335', paddingTop: '4%' }}>
                    <div className='about-me'>
                        <text>Interests</text>
                    </div>
                    <div className='center-pos' style={{ width: '60%', margin: 'auto', paddingBottom: '4%', marginTop: '3%' }}>
                                <MDBContainer className='shadow'>
                                    <MDBCarousel
                                        activeItem={1}
                                        length={4}
                                        showControls={true}
                                        showIndicators={false}
                                        className='z-depth-1'
                                        >
                                        <MDBCarouselInner>
                                            <MDBCarouselItem itemId='1'>
                                                <MDBView>
                                                    <img
                                                        className='d-block w-100'
                                                        src={Img1}
                                                        alt='Madden NFL 19'
                                                    />
                                                    <MDBMask overlay='black-light' />
                                                </MDBView>
                                                {/* <MDBCarouselCaption>
                                                    <h3 className='h3-responsive'>Games</h3>
                                                    <p>Madden NFL 19</p>
                                                </MDBCarouselCaption> */}
                                            </MDBCarouselItem>
                                            <MDBCarouselItem itemId='2'>
                                                <MDBView>
                                                    <img
                                                    className='d-block w-100'
                                                    src={Img2}
                                                    alt='Polar Bears Flag Football Team'
                                                    />
                                                    <MDBMask overlay='black-strong' />
                                                </MDBView>
                                                {/* <MDBCarouselCaption>
                                                    <h3 className='h3-responsive' style={{ color: 'black' }}>Sport</h3>
                                                    <p style={{ color: 'black' }}>Flag Football</p>
                                                </MDBCarouselCaption> */}
                                            </MDBCarouselItem>
                                            <MDBCarouselItem itemId='3'>
                                                <MDBView>
                                                    <img
                                                    className='d-block w-100'
                                                    src={Img3}
                                                    alt='AKB48 55th Single 「ジワるDAYS」'
                                                    />
                                                    <MDBMask overlay='black-slight' />
                                                </MDBView>
                                                {/* <MDBCarouselCaption>
                                                    <h3 className='h3-responsive'>Japanese Idol</h3>
                                                    <p>AKB48</p>
                                                </MDBCarouselCaption> */}
                                            </MDBCarouselItem>
                                            <MDBCarouselItem itemId='4'>
                                                <MDBView>
                                                    <img
                                                    className='d-block w-100'
                                                    src={Img4}
                                                    alt='Apple Music'
                                                    />
                                                    <MDBMask overlay='black-slight' />
                                                </MDBView>
                                                {/* <MDBCarouselCaption>
                                                    <h3 className='h3-responsive' style={{ color: 'black' }}>Music</h3>
                                                    <p style={{ color: 'black' }}>Apple Music</p>
                                                </MDBCarouselCaption> */}
                                            </MDBCarouselItem>
                                        </MDBCarouselInner>
                                    </MDBCarousel>
                                </MDBContainer>
                    </div>
                </div>
                <div style={{ margin: '0.5%' }}>
                    <ScrollUpButton>
                        <CustomScrollTop />
                    </ScrollUpButton>
                </div>
            </Fragment>
        );
    }
}