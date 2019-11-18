import React, { Component } from 'react';
import { Row, Col, Icon, Divider, Button } from 'antd';
import profilePict from './../../assets/img/pict.jpg';

export default class Intro extends Component {
  render() {
    const { language } = this.props;
    const { Group } = Button

    return (
      <Row>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0px' }}>
          <div className='bg-dopeblue shadow' style={{ position: 'absolute', zIndex: 0, height: '50vh', width: '85vw' }}></div>
        </div>
        <div style={{ position: 'absolute', zIndex: 0, top: '52vh', right: '11.5vw' }}>
          {/* <a href='https://drive.google.com/open?id=1tAKX1U1CLoloqK6QNuMTf3MrkcdKD-6r'>Download PNG CV</a>
          <Divider type='vertical' style={{ backgroundColor: 'black !important' }} />
        <a href='https://drive.google.com/open?id=14e6OKz4qKxZthIMo3-k4UZGJqWiMCy90'>Download PDF CV</a> */}

          <Group className='shadow' style={{ borderRadius: '25px' }}>
            <Button className='login-form-button' style={{ borderTop: 'transparent', borderBottom: 'transparent', borderLeft: 'transparent', color: 'white', borderTopLeftRadius: '25px', borderBottomLeftRadius: '25px', backgroundColor: '#88C7FA' }} href='https://drive.google.com/open?id=1tAKX1U1CLoloqK6QNuMTf3MrkcdKD-6r' target='_blank'>Download PNG CV</Button>
            <Button className='login-form-button' style={{ borderTop: 'transparent', borderBottom: 'transparent', borderRight: 'transparent', color: 'white', borderTopRightRadius: '25px', borderBottomRightRadius: '25px', backgroundColor: '#88C7FA' }} href='https://drive.google.com/open?id=14e6OKz4qKxZthIMo3-k4UZGJqWiMCy90' target='_blank'>Download PDF CV</Button>
          </Group>
        </div>
        <div className='section-div' style={{ backgroundColor: 'transparent', zIndex: 1 }}>
          <Row className='intro-content-div'>
            <Col span={9}>
              <img src={profilePict} alt='Profile' className='profile-pict shadow' />
            </Col>
            <Col span={15} className='sf-pro-rounded-regular' style={{ color: 'white' }}>
              <Row>
                <Col span={15}>
                  <span style={{ fontSize: '4vw', fontWeight: 'bold' }}>Muhamad Zaky</span>
                </Col>
                <Col span={9} style={{ marginTop: '22px', fontSize: '1.16vw' }}>
                  <Row>
                    <Col className='pull-right'>
                      <span>.NET Developer</span>&nbsp;
                      <span>(2017-2019)</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='pull-right'>
                      <span>Front End Developer</span>&nbsp;
                      <span>(2019-now)</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className='fontsize1comma2vw' style={{ marginTop: '2vh' }}>
                <Col span={12}>
                  <span><b>Born</b>: October 23, 2019</span>
                </Col>
                <Col span={12}>
                  <span><Icon type='environment' theme='filled' /> Bandung, Indonesia</span>
                </Col>
              </Row>
              <Row className='fontsize1comma2vw'>
                <Col>
                  <span><b>Nationality</b>: Indonesia</span>
                </Col>
              </Row>
              <Row style={{ marginTop: '2vh', fontSize: '1.1vw', color: 'rgba(0, 0, 0, 0.45)' }}>
                <Col>
                  <p>I like to write code, drawing, designing, doing sport, listening to music. </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Row>
    )
  }
}