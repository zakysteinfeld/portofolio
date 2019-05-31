import React, { Component, Fragment } from 'react';
import {Row, Col } from 'reactstrap';
import bg from './../assets/img/pict.jpg';

export default class Bio extends Component {
    render() {
        return (
            <Fragment>
                <Row style={{ margin: 'auto', width: '52%', paddingBottom: '6%' }}>
                    <Col md={5} style={{ display: 'block' }}>
                        <img src={bg} className='bg-img' alt={'Muhamad Zaky'} />
                    </Col>
                    <Col md={7} style={{ display: 'block' }} >
                        <Row>
                            <Col className='hi'>
                                <text>Hi.</text>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '-20px', marginLeft: '-5px' }}>
                            <Col className='intro'>
                                <text>
                                    &nbsp;&nbsp;&nbsp; My name is <b>Zaky</b>, I'm a Front-end Developer currently, using javascript framework <b>ReactJS</b>. with speciality in <b>.NET (C#)</b> on the back.
                                </text>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}