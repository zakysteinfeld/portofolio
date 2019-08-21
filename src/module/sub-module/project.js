import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import data from './../../common/json/project.json';

export default class Project extends Component {
    render() {
        const { Meta } = Card;
        console.log(data)

        return(
            <div>
                <Row className='project-text-div'>
                    <text className='project-text'>Projects</text>
                </Row>
                <Row>
                    {
                        data.map(function(response, index) {
                            return (
                                <Col md={8} className='project-div'>
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
            </div>
        )
    }
}