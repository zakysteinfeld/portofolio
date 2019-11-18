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
            style={{ left: '-12vw' }}
          >
            <Row className='sf-pro-rounded-regular'>
              <Col span={12}>
                <div className='pull-left'>
                  <span style={{ fontWeight: 'bold' }}>{ modalContent.name }</span>            
                </div>
              </Col>
              <Col span={12}>
                <div className='pull-right'>
                  <span style={{ fontWeight: 'bold', backgroundColor: '#d13438', borderRadius: '100px', padding: '3px 10px', color: 'white' }}>{ modalContent.year }</span>            
                </div>
              </Col>
            </Row>
            <Row style={{ margin: '12px 0px' }}>
              <Col>
                { modalContent.appImg ? <img src={require('./../../assets/img/' + modalContent.appImg)} alt={modalContent.image} className='card-img' /> : null}
              </Col>
            </Row>
            <Row>
              <Col>
                <span>Tech: { modalContent.tech }</span>
              </Col>
            </Row>
          </Modal>
        </div>
      </Fragment>
    )
  }
}