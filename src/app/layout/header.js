import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <Row className='header'>
        <Col span={12}>
          <Link to='/'>
            <div className='sf-pro-rounded-regular' style={{ position: 'absolute' }}>
              <span className='name-box'>Muhamad Zaky</span>
            </div>
          </Link>
        </Col>
        <Col span={12} className='pull-right'>
          <div className='sf-pro-rounded-regular black-divider' style={{ color: 'white' }}>
            <Link to='/404-Not-Found'><span>My Story</span></Link><Divider type='vertical' style={{ background: 'black !important' }} /><Link to='/404-Not-Found'><span>About</span></Link>
          </div>
        </Col>
      </Row>
    )
  }
}