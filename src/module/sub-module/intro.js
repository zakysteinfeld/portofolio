import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import ProfilePict from './../../assets/img/pict.jpg';

export default class Bio extends Component {
    render() {
        return (
            <div className='intro-div'>
                <Row>
                    <Col className='name-box shadow'>
                        <text>Muhamad Zaky</text>
                    </Col>
                </Row>
                <Row className='intro-content'>
                    <Col span={11} offset={1} className='profile-img-div'>
                        <img src={ProfilePict} className='profile-img' />
                    </Col>
                    <Col span={11} offset={1}>
                        <Row className='hi-text-div'>
                            <text className='hi-text'>Hi.</text>
                        </Row>
                        <Row className='intro-text-div'>
                            <text className='intro-text'>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; My name is <b>Zaky</b>, I'm a Front-end Developer currently, using javascript framework <b>ReactJS</b> with speciality in <b>.NET (C#)</b> on the back.
                            </text>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}