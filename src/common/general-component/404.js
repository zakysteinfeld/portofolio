import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

export default class NotFound404 extends Component {
  render () {
    return (
      <Row style={{ margin: '200px' }}>
        <center>
          <Row style={{ marginBottom: '20px' }}>Sorry this page is under construction.</Row>
          <Row><Link to='/'><Button>Back to Home</Button></Link></Row>
        </center>
      </Row>
    )
  }
}