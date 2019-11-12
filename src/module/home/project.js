import React, { Component } from 'react'
import { Row, Col, List } from 'antd'
import dataJSON from './../../common/json/project.json'
import ModalProject from './project-modal'

export default class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      modalContent: {
        name: '',
        year: '',
        image: '',
        client: '',
        desc: '',
        descjp: '',
        tech: '',
        appImg: 'no-image'
      },
      modalStatus: false
    }
  }

  componentWillMount() {
    this.setState({ data: dataJSON })
  }

  onClickModal = (item, status) => {
    this.setState({
      modalContent: Object.assign({}, this.state.modalContent, {
        name: item.name,
        year: item.year,
        image: item.image,
        client: item.client,
        desc: item.desc,
        descjp: item.descjp,
        tech: item.tech,
        appImg: item.appImg
      }),
      modalStatus: status
    })
  }
  
  render () {
    return (
      <div className='section-div'>
        <Row>
          <Col>
            <div className='project-title sf-pro-rounded-regular'>
              Project
            </div>
          </Col>
        </Row>
        <Row style={{ margin: '5vh 0vw', display: 'flex', justifyContent: 'center' }}>
          {
            dataJSON.map(function (response, index) {
              return (
                <Col md={8} className='project-card shadow' key={index}
                  // onClick={() => this.onClickModal(item, true)}
                >
                  <Row>
                    <Col className='project-card-image-div'>
                      <img src={require('./../../assets/img/' + response.image + '.png')} alt={response.image} className='project-card-image' />
                    </Col>
                  </Row>
                  <Row>
                    <Col className='project-card-text shadow sf-pro-rounded-regular'>
                      <Row>
                        <span style={{ letterSpacing: '2px' }}><b>{response.name}</b></span>
                      </Row>
                      <Row>
                        <span>{response.year}</span>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              )
            })
          }
        </Row>
        {/* <ModalProject modalContent={this.state.modalContent} modalStatus={this.state.modalStatus} onClickModal={this.onClickModal} /> */}
      </div>
    )
  }
}