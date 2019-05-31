import React, { Component, Fragment } from 'react';
import Divider from '@material-ui/core/Divider';
import { Icon, Drawer } from 'antd';

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
                        <div style={{ margin: 'auto', width: '60%', padding: '4% 0% 0%'}}>
                            <p>
                                <text style={{ fontSize: '18px' }}>Contact me on: </text>
                                <a className='socmed' href='https://twitter.com/zakysteinfeld' style={{ color: 'black' }}><Icon type='twitter' style={{ fontSize: '25px', color: 'black' }} /></a>
                                <a className='socmed' href='https://instagram.com/zakysteinfeld' style={{ color: 'black' }}><Icon type='instagram' style={{ fontSize: '25px', color: 'black' }} /></a>
                                <a className='socmed' href='https://www.linkedin.com/in/muhamadzaky/' style={{ color: 'black' }}><Icon type='linkedin' style={{ fontSize: '25px', color: 'black' }} /></a>
                                <a className='socmed' href='mailto:zakysteinfeld@outlook.com' style={{ color: 'black' }}><Icon type='mail' style={{ fontSize: '25px', color: 'black' }} /></a>
                            </p>
                        </div>
                        <Divider />
                        <div style={{ margin: 'auto', width: '60%', padding: '1% 0%' }}>
                            <span>Copyright © 2019 </span>
                            <span> ・ v1.0.1 Develop by Muhamad Zaky </span>
                        </div>
                        {/* <a className='socmed' style={{ fontSize: '15px' }} onClick={ () => this.showDrawer() }>About App</a> */}
                    </div>
                </footer>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </Fragment>
        );
    }
}

export default Footer;