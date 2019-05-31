import React, { Component, Fragment } from 'react';
import Divider from '@material-ui/core/Divider';
import { Icon, Drawer } from 'antd';
import { Row, Col } from 'reactstrap';

class Footer extends Component {
    state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

    render() {
        return(
            <Fragment>
                <footer>
                    <div className='footer'>
                        <div style={{ margin: 'auto', width: '65%', padding: '4% 0% 1%'}}>
                            <p>
                                <text style={{ fontSize: '18px' }}>Contact me on: </text>
                                <a className='socmed' href='https://twitter.com/zakysteinfeld' style={{ color: 'black' }}><Icon type='twitter' style={{ fontSize: '25px', color: 'black' }} /></a>
                                <a className='socmed' href='https://instagram.com/zakysteinfeld' style={{ color: 'black' }}><Icon type='instagram' style={{ fontSize: '25px', color: 'black' }} /></a>
                                <a className='socmed' href='https://www.linkedin.com/in/muhamadzaky/' style={{ color: 'black' }}><Icon type='linkedin' style={{ fontSize: '25px', color: 'black' }} /></a>
                            </p>
                        </div>
                        <div style={{ margin: 'auto', width: '65%', padding: '0% 0% 0%'}}>
                            <Divider />
                        </div>
                        <div style={{ margin: 'auto', width: '65%', padding: '2% 0% 0%'}}>
                            <p>
                                <Row>
                                    <Col md={3}>
                                        <a className='socmed' href='mailto:zakysteinfeld@outlook.com' style={{ color: 'black', fontSize: '15px' }}><b>Send me email</b></a>
                                    </Col>
                                    <Col md={3}>
                                        <a className='socmed' style={{ fontSize: '15px' }} onClick={ () => this.showDrawer() }>About App</a>
                                    </Col>
                                </Row>
                            </p>
                        </div>
                        <div style={{ margin: 'auto', width: '65%', padding: '1% 0% 0%' }}>
                            <Divider />
                        </div>
                        <div style={{ margin: 'auto', width: '65%', padding: '1% 0% 2%' }}>
                            <span>Copyright © 2019 </span>
                            <span> ・ v1.0.3 Develop by Muhamad Zaky </span>
                        </div>
                    </div>
                </footer>
                <Drawer
                    title="About App"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p style={{ fontSize: '15px', textAlign: 'justify' }}>&nbsp;&nbsp;&nbsp;This is a portofolio website of Muhamad Zaky</p>
                    <p>
                        Another dependency in use:  <br/>
                        ・antd v3.19.1 <br/>
                        ・bootstrap v4.3.1 <br/>
                        ・gh-pages v2.0.1 <br/>
                        ・mdbreact v4.15.0 <br/>
                        ・reactstrap v8.0.0 <br/>
                    </p>
                    <p style={{ textAlign: 'justify' }}>&nbsp;&nbsp;&nbsp;Thank you for visiting my portofolio! Maybe you are interested in me? Just contact me via my social media or email. <br/> Thank you once again. Cheers!</p>
                    <p><b>Regards, Muhamad Zaky</b></p>
                </Drawer>
            </Fragment>
        );
    }
}

export default Footer;