import React from 'react';
import { Modal } from 'antd';
import { Row, Col } from 'antd';

export const ModalInfo = (item) => {
  switch (item) {
    case 1:
        return(
          Modal.info({
            title: 'Portal AHASS',
            content: (
              <div>
                <p className='modal-text'>
                  <text style={{ textAlign: 'justify' }}><b>Descriptions</b>: <br/>Portal AHASS is an ERP application that deserve user with some of chart reports on the dasboard page.<br/>
                  <b>Features</b>: <br/>
                  <Row>
                    <Col md={1}>
                      ・
                    </Col>
                    <Col md={23}>
                      view report in chart display per-dealer/district/region with date filter
                    </Col>
                  </Row>
                  <Row>
                    <Col md={1}>
                      ・
                    </Col>
                    <Col md={23}>
                      view report in table display per-dealer/district/region with date filter
                    </Col>
                  </Row>
                  <Row>
                    <Col md={1}>
                      ・
                    </Col>
                    <Col md={23}>
                      download report data per-dealer/district/region with date filter
                    </Col>
                  </Row>
                  <Row>
                    <Col md={1}>
                      ・
                    </Col>
                    <Col md={23}>
                      single sign on login
                    </Col>
                  </Row>
                  </text><br/>
                  <text><b>Technologies</b></text><br/>
                  <text><b>Front-end</b>: ReactJS, JQuery, ChartJS, Redux, Bootstrap</text><br/>
                  <text><b>Back-end</b>: .NET 4.5, Rest API, NPOI, PetaPoco, Crystal Report</text><br/>
                  <text><b>Database</b>: SQL Server 2018</text>
                </p>
              </div>
            ),
            onOk() {},
          })
        )
      break;
    case 2:
        return(
          Modal.info({
            title: 'Boga Royalty Apps',
            content: (
              <div>
                <p className='modal-text'>
                <text style={{ textAlign: 'justify' }}><b>Descriptions</b>: <br/>Boga Royalty Apps is a royalty application that give coupon\promo code for customer on restaurant under Boga Group.<br/>
                  <b>Features</b>: <br/>
                  <Row>
                    <Col md={1}>
                      ・
                    </Col>
                    <Col md={23}>
                      middle-ware from PoS to Boga wordpress application
                    </Col>
                  </Row>
                  <Row>
                    <Col md={1}>
                      ・
                    </Col>
                    <Col md={23}>
                      set table when customer reserve menu (manual or using qr code)
                    </Col>
                  </Row>
                  <Row>
                    <Col md={1}>
                      ・
                    </Col>
                    <Col md={23}>
                      download customer order history with status and date parameter
                    </Col>
                  </Row>
                  </text><br/>
                  <text><b>Technologies</b></text><br/>
                  <text><b>App</b>: .NET 4.6</text><br/>
                  <text><b>Database</b>: SQL Server, My SQL, Firebase</text>
                </p>
              </div>
            ),
            onOk() {},
          })
        )
      break;
    case 3:
        return(
          Modal.info({
            title: 'PocketBank-Merchant',
            content: (
              <div>
                <p className='modal-text'>
                <text style={{ textAlign: 'justify' }}><b>Descriptions</b>: <br/> -<br/>
                  <b>Features</b>: <br/>
                  {/* <Row style={{ textAlign: 'justify' }}>
                    <Col md={1}>
                      ・
                    </Col>
                    <Col md={23}>
                      middle-ware from PoS to Boga wordpress application
                    </Col>
                  </Row>
                  <Row>
                    <Col md={1}>
                      ・
                    </Col>
                    <Col md={23}>
                      set table when customer reserve menu (manual or using qr code)
                    </Col>
                  </Row>
                  <Row>
                    <Col md={1}>
                      ・
                    </Col>
                    <Col md={23}>
                      download customer order history with status and date parameter
                    </Col>
                  </Row> */} -
                  </text><br/>
                  <text><b>Technologies</b></text><br/>
                  <text><b>Front-end</b>: ReactJS, JQuery, Ant Design, Redux, Bootstrap</text><br/>
                </p>
              </div>
            ),
            onOk() {},
          })
        )
      break;
    case 4:
        return(
          Modal.info({
            title: 'Flight Board',
            content: (
              <div>
                <p className='modal-text'>
                <text style={{ textAlign: 'justify' }}><b>Descriptions</b>: <br/>Flight Board is a Flight Operation Management System, addressed to aviation school in Bandung.<br/>
                  <b>Features</b>: <br/>
                  <Row>
                    <Col md={1}>
                      ・
                    </Col>
                    <Col md={23}>
                      Login
                    </Col>
                  </Row>
                  <Row>
                    <Col md={1}>
                      ・
                    </Col>
                    <Col md={23}>
                      CRUD for Cadet, Instructure, Plane, Cadet Lesson
                    </Col>
                  </Row>
                  <Row>
                    <Col md={1}>
                      ・
                    </Col>
                    <Col md={23}>
                      set Cadet lesson progression
                    </Col>
                  </Row>
                  <Row>
                    <Col md={1}>
                      ・
                    </Col>
                    <Col md={23}>
                      set plane service operation time
                    </Col>
                  </Row>
                  </text><br/>
                  <text><b>Technologies</b></text><br/>
                  <text><b>App</b>: HTML, JQuery, Code Igniter, Bootstrap</text><br/>
                  <text><b>Database</b>: My SQL</text><br/>
                </p>
              </div>
            ),
            onOk() {},
          })
        )
      break;
      default: return(null)
      break;
  }
}

function success() {
  Modal.success({
    title: 'This is a success message',
    content: 'some messages...some messages...',
  });
}

function error() {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
}

function warning() {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
}