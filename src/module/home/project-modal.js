import React, { Component, Fragment } from 'react'
import { Modal, Row, Col } from 'antd'

export default class ProjectModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalContent: {
        name: '',
        year: '',
        image: '',
        client: '',
        desc: '',
        descjp: '',
        tech: '',
        appImg: 'no-image'
      }
    }
  }
  render() {
    const { modalContent, modalStatus, onClickModal } = this.props
    return (
      <Fragment>
        <div className='project-modal-div'>
          <Modal
            centered
            visible={modalStatus}
            onOk={() => onClickModal(this.state.modalContent, false)}
            onCancel={() => onClickModal(this.state.modalContent, false)}
            closable={false}
            footer={null}

          >
            <Row className='sf-pro-rounded-regular'>
              <Col span={12}>
                <div className='pull-left'>
                  <span style={{ fontWeight: 'bold' }}>{ modalContent.name }</span>            
                </div>
              </Col>
              <Col span={12}>
                <div className='pull-right'>
                  <span style={{ fontWeight: 'bold' }}>{ modalContent.year }</span>            
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                {/* <img src={require('./../../assets/img/' + modalContent.image + '.png')} alt={modalContent.image} className='card-img' /> */}
              </Col>
            </Row>
          </Modal>
        </div>
      </Fragment>
    )
  }
}