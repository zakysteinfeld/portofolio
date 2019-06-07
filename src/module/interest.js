import React, { Component, Fragment } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from 'mdbreact';
import ScrollUpButton from "react-scroll-up-button";
import CustomScrollTop from './custom-scroll-top';
import Fade from 'react-reveal/Fade';
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
                    </Fade>
                    <div className='center-pos' style={{ width: '60%', margin: 'auto', paddingBottom: '4%', marginTop: '3%' }}>
                        <Fade bottom>
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
                                        </MDBCarouselItem>
                                    </MDBCarouselInner>
                                </MDBCarousel>
                            </MDBContainer>
                        </Fade>
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