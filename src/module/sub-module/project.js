import React, { Component } from 'react';
import { Row, Col, Card, Modal, Button } from 'antd';
import data from './../../common/json/project.json';

export default class Project extends Component {
    state = {
        openModalImage: false
    }

    openModalImage = () => {
        this.setState({ openModalImage: !this.state.openModalImage })
    }

    renderModalImage = () => {
        const { initialData, stateData } = this.props;
        return (
            <div className='modal-background'>
                <Modal
                    // title={<text className='font-lexend-deca'>{ initialData.name }</text>}
                    centered
                    visible={this.state.openModalImage}
                    onCancel={() => {
                        this.openModalImage()
                    } }
                    footer={null}
                    closable={false}
                    className='modal-background'
                    width='90vw'
                >
                    { initialData.appImg !== undefined ? initialData.appImg !== null ? initialData.appImg !== '' ? <div className='image-view'><img src={require('../../assets/img/' + initialData.appImg) } className='appImg' /></div> : null : null : null }
                </Modal>
            </div>
        )
    }

    renderModalProjects = () => {
        const { initialData, stateData } = this.props;
        return (
            <Modal
                title={<text className='font-lexend-deca'>{ initialData.name }</text>}
                centered
                visible={this.props.status}
                onCancel={() => {
                    this.props.setToggle(false) 
                    this.props.removeContent()
                } }
                footer={null}
                closable={false}
            >
                <div className='font-lexend-deca'>
                    <p>{ stateData.lang === 'ja' ? initialData.descjp : initialData.desc }</p>
                    { initialData.appImg !== undefined ? initialData.appImg !== null ? initialData.appImg !== '' ? <img src={require('../../assets/img/' + initialData.appImg) } className='appImg' onClick={ () => this.openModalImage() } /> : null : null : null }
                    <p>{ initialData.tech !== undefined ? initialData.tech !== null ? initialData.tech !== '' ? '('+initialData.tech+')' : null : null : null }</p>
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
                {this.renderModalImage()}
            </div>
        )
    }
}