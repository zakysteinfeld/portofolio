import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import { getCookies } from '../utils/cookies-utils';
import { DEV_ENV, PROD_ENV } from '../constant'

export default class NotFound404 extends Component {
  render () {
    const path = getCookies('env') === 'DEV_ENV' ? DEV_ENV : PROD_ENV
    return (
      <Row style={{ margin: '200px' }}>
        <center>
          <Row style={{ marginBottom: '20px' }}>Sorry this page is under construction.</Row>
          <Row><Link to={path}><Button>Back to Home</Button></Link></Row>
        </center>
      </Row>
    )
  }
}