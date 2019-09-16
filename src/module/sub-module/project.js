import React, { Component } from 'react';
import { Row, Col, Card, Modal, Button } from 'antd';
import data from './../../common/json/project.json';

export default class Project extends Component {
    renderModalProjects = () => {
        const { initialData } = this.props;
        return (
            <Modal
                title={<text className='font-lexend-deca'>{initialData.name}</text>}
                centered
                visible={this.props.status}
                onCancel={() => {
                    this.props.setToggle(false) 
                    this.props.removeContent()
                } }
                footer={null}
            >
                <div className='font-lexend-deca'>
                    <p>{initialData.desc}</p>
                    { initialData.appImg !== undefined ? initialData.appImg !== null ? initialData.appImg !== '' ? <img src={require('../../assets/img/' + initialData.appImg)} className='appImg' /> : null : null : null }
                    <p>{initialData.tech !== undefined ? initialData.tech !== null ? initialData.tech !== '' ? '('+initialData.tech+')' : null : null : null}</p>
                </div>
            </Modal>
        )
    }
    
    render() {
        const { Meta } = Card;
        const { status, setToggle, setContent, initialData, stateData } = this.props;

        return(
            <div className='font-lexend-deca'>
                <Row className='project-text-div'>
                    <text className='project-text'>
                        { stateData.lang === 'ja' ? 'プロジェクス' : 'Projects' }
                    </text>
                </Row>
                <Row>
                    {
                        data.map(function(response, index) {
                            return (
                                <Col md={8} className='project-div' 
                                    onClick={ () => {
                                        setToggle(true) 
                                        setContent(response)} 
                                    }>
                                     <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<div className='card'><img src={require('./../../assets/img/' + response.image + '.png')} alt={response.image} className='card-img' /></div>}
                                    >
                                        <Meta title={response.name} description={response.year} />
                                    </Card>
                                </Col>
                            );
                        })
                    }
                </Row>
                {this.renderModalProjects()}
            </div>
        )
    }
}