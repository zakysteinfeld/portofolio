import React, { Component } from 'react'
import { Row, Col } from 'antd'

export default class AboutComponent extends Component {
  render () {
    return (
      <div className='section-div sf-pro-rounded-regular' style={{ marginTop: '10vh' }}>
        <Row>
          <Col span={5} className='pull-right' style={{ fontSize: '2vw', fontWeight: 'bold' }}><span>About</span></Col>
          <Col span={14} style={{ marginLeft: '1vw', paddingTop: '1vh', fontSize: '1.4vw' }}>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This Thank you for visiting my portofolio! Maybe you are interested in me? Just contact me via my social media or email.
            </p>
          </Col>
        </Row>
      </div>
    )
  }
}