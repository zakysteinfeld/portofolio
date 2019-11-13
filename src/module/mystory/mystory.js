import React, { Component, Fragment } from 'react'
import { Row, Col, Icon, Input, Button } from 'antd'
import { Link } from 'react-router-dom'
import profilePict from './../../assets/img/pict.jpg'
import { DEV_ENV, PROD_ENV } from './../../common/constant'
import { getCookies } from '../../common/utils/cookies-utils'

export default class MyStory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailFrom: '',
      emailTo: '',
      subject: '',
      body: ''
    }
  }
  
  handleChange = (e) => {
    if (e.target.id === 'emailFrom') {
      this.setState({ emailFrom: e.target.value })
    }
    if (e.target.id === 'subject') {
      this.setState({ subject: e.target.value })
    }
    if (e.target.id === 'mailMessage') {
      this.setState({ body: e.target.value })
    }
  }

  handleSubmit = () => {
    window.open('mailto:zakysteinfeld@outlook.com?subject=' + this.state.subject + '&body=from: ' + this.state.emailFrom + ' \r\n | \r\n ' +  this.state.body);
  }

  render () {
    const path = getCookies('env') === 'DEV_ENV' ? DEV_ENV : PROD_ENV
    
    return (
      <Fragment>
        <div className='section-div' style={{ marginTop: '6vh', display: 'flex', justifyContent: 'center' }}>
          <Row style={{ margin: '10vh 0vw 5vh 0vw' }}>
            <Col span={10}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={profilePict} alt='Profile' className='shadow' style={{ backgroundColor: 'white', width: '16vw', borderRadius: '25px'}} />
              </div>
            </Col>
            <Col span={14} className='sf-pro-rounded-regular'>
              <div style={{ marginTop: '5vh' }}>
                <Row>
                  <Col>
                    <span className='hi'>Hi.</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <span className='intro'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; My name is <b>Zaky</b>, I'm a Frontend Developer currently, using javascript framework <b>ReactJS</b> with speciality in <b>.NET (C#)</b> on the back.</span>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div className='section-div intro sf-pro-rounded-regular' style={{ marginTop: '8vh', marginBottom: '10vh', display: 'flex', justifyContent: 'center' }}>
          <Row>
            <Col span={10} style={{ marginRight: '1vw' }}>
              <a href='https://smkn4bdg.sch.id/' target='blank'>
                <div className='shadow mystory-card'>
                  <Row>
                    <span style={{ fontSize: '1vw', color: 'black' }}>Education</span>
                  </Row>
                  <Row>
                    <span style={{ color: 'black' }}>SMKN 4 Bandung</span>
                  </Row>
                </div>
              </a>
            </Col>
            <Col span={2}></Col>
            <Col span={10} style={{ marginLeft: '1vw' }}>
              <a href='https://www.wgs.co.id/' target='blank'>
                <div className='shadow mystory-card'>
                  <Row>
                    <span style={{ fontSize: '1vw', color: 'black' }}>Current Company</span>
                  </Row>
                  <Row>
                    <span style={{ color: 'black' }}>PT Walden Global Services</span>
                  </Row>
                </div>
              </a>
            </Col>
          </Row>
        </div>
        <div className='section-div sf-pro-rounded-regular' style={{ display: 'flex', justifyContent: 'center' }}>
          <Row style={{ width: '70vw' }}>
            <Row>
              <span className='mail-text'>Do you have any questions? Or you simply want to say hi?</span>
            </Row>
            <Row>
              <span className='mail-text'>Just drop me a message!</span>
            </Row>
            <Row>
              <Col span={16}>
                <Row className='text-input-div'>
                  <label>Email <label style={{ color: 'red' }}>*</label></label>
                  <Input
                    id='emailFrom'
                    className='shadow text-input'
                    onChange={this.handleChange}
                    placeholder='Email'
                  />
                </Row>
                <Row className='text-input-div'>
                  <label>Subject</label>
                  <Input
                    id='subject'
                    className='shadow text-input'
                    onChange={this.handleChange}
                    placeholder='Subject'
                    />
                </Row>
                <Row className='text-input-div'>
                  <label>Message</label>
                  <Input.TextArea
                    id='mailMessage'
                    className='shadow text-input'
                    rows={6}
                    onChange={this.handleChange}
                    placeholder='Drop your message here'
                  />
                </Row>
                <Row className='text-input-div'>
                  <Button type="primary" htmlType="submit" className="login-form-button shadow" style={{ borderRadius: '25px' }} icon='check' onClick={this.handleSubmit}>
                    Send
                  </Button>
                </Row>
              </Col>
              <Col span={1}></Col>
              <Col span={7}>
                <Row>
                  <Col>
                    <Row style={{ marginTop: '15px', fontSize: '1.5vw' }}><Icon type='environment' theme='filled' />&nbsp; Bandung, Indonesia</Row>
                    <Row style={{ marginTop: '15px', fontSize: '1.5vw' }}><Icon type='mail' theme='filled' />&nbsp; zakysteinfeld@outlook.com</Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </div>
        <div className='section-div sf-pro-rounded-regular' style={{ marginTop: '30px' }}>
          <Row>
            <Col>
              <Link to={path}><Icon type='arrow-left' /> Back to Home</Link>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}