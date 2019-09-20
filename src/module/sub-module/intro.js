import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import ProfilePict from './../../assets/img/pict.jpg';
import Fade from 'react-reveal/Fade';

export default class Bio extends Component {
    render() {
        const { initialData } = this.props;
        return ( 
            <div className='intro-div'>
                <Row>
                    <Col className='name-box shadow'>
                        <text>{initialData.lang === 'ja' ? 'ムハマド・ザキ' : 'Muhamad Zaky'}</text>
                    </Col>
                </Row>
                <Row className='intro-content'>
                    <Col offset={1} span={11} xs={4} sm={7} md={11} lg={15} className='profile-img-div'>
                        <img src={ProfilePict} className='profile-img' />
                    </Col>
                    <Col offset={1} span={11} xs={4} sm={7} md={11} lg={15}>
                        {
                            initialData.lang === 'ja' ?
                                <Fragment>
                                    <Row className='hi-text-div-jp'>
                                        <text className='hi-text-jp'>こんにちは！</text>
                                    </Row>
                                    <Row className='intro-text-div-jp'>
                                        <text className='intro-text'>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 私の名前は<b>ざき</b>です私は現在、<b>ReactJS</b> javascriptフレームワークのフロントエンド開発者であり、バックエンドとして<b>.NET（C＃）</b>を専門にしています。
                                        </text>
                                    </Row>
                                </Fragment>
                                :
                                <Fragment>
                                    <Row className='hi-text-div'>
                                        <text className='hi-text'>Hi.</text>
                                    </Row>
                                    <Row className='intro-text-div'>
                                        <text className='intro-text'>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; My name is <b>Zaky</b>, I'm a Front-end Developer currently, using javascript framework <b>ReactJS</b> with speciality in <b>.NET (C#)</b> on the back.
                                        </text>
                                    </Row>
                                </Fragment>
                            }
                    </Col>
                </Row>
            </div>
        )
    }
}