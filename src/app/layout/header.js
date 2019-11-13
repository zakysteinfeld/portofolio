import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { DEV_URI, PROD_URI } from './../../common/constant'

export default class Header extends Component {
  render() {
    const { initialData } = this.props
    const path = initialData.env
    const uri = initialData.env === 'DEV_ENV' ? DEV_URI : PROD_URI
    return (
      <Row className='header'>
        <Col span={12}>
          <Link to={path}>
            <div className='sf-pro-rounded-regular' style={{ position: 'absolute' }}>
              <span className='name-box'>Muhamad Zaky</span>
            </div>
          </Link>
        </Col>
        <Col span={12} className='pull-right'>
          <div className='sf-pro-rounded-regular black-divider' style={{ color: 'white' }}>
            <span className='link-to'><Link to={ path + 'MyStory'}>My Story</Link></span>
            {/* <Divider type='vertical' style={{ background: 'black !important' }} /><Link to={ path + 'About'}><span className={ window.location.href === uri + '/About' ? 'link-on' : '' }>About</span></Link> */}
          </div>
        </Col>
      </Row>
    )
  }
}