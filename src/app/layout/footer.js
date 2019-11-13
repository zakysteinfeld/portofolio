import React, { Component } from 'react';
import { Row, Col, Icon, Select } from 'antd';
import { setCookies } from '../../common/utils/cookies-utils';

export default class Footer extends Component {
  handleChange = (value) => {
    console.log('language', value)
    setCookies('lang', value)
    this.props.setLangfromFooter(value)
  }
  render () {
    const { Option } = Select
    return (
      <div className='sf-pro-rounded-regular section-div footer'>
        <Row>
          <Col span={12}>
            <span>&copy; 2019 ・ Developed with <Icon type='heart' theme='filled' /> by Muhamad Zaky</span>
          </Col>
          <Col span={12} className='pull-right'>
            {/* <Select defaultValue='en' onChange={this.handleChange}>
              <Option value='en'>English</Option>
              <Option value='ja'>Japanese</Option>
            </Select> */}
            <a className='socmed' href='https://twitter.com/zakysteinfeld' target='_blank'><Icon type='twitter' /></a>
            <a className='socmed' href='https://instagram.com/zakysteinfeld' target='_blank'><Icon type='instagram' theme='filled' /></a>
            <a className='socmed' href='https://www.linkedin.com/in/muhamadzaky/' target='_blank'><Icon type='linkedin' theme='filled' /></a>
          </Col>
        </Row>
      </div>
    )
  }
}