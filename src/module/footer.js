import React, { Component } from 'react';
import { Icon } from 'antd';

class Footer extends Component {
    render() {
        return(
            <footer>
                <div className='footer'>
                    <div style={{ margin: '4% 0%'}}>
                        <h5>Contact me? Just click the link below! ;)</h5>
                        <br/>
                        <p>
                            <a className='socmed' href='https://twitter.com/zakysteinfeld' style={{ color: 'black' }}><Icon type='twitter' style={{ fontSize: '30px', color: 'black' }} /> @zakysteinfeld</a>
                            <a className='socmed' href='https://instagram.com/zakysteinfeld' style={{ color: 'black' }}><Icon type='instagram' style={{ fontSize: '30px', color: 'black' }} /> @zakysteinfeld</a>
                            <a className='socmed' href='https://www.linkedin.com/in/muhamadzaky/' style={{ color: 'black' }}><Icon type='linkedin' style={{ fontSize: '30px', color: 'black' }} /> Muhamad Zaky</a>
                            <a className='socmed' href='mailto:zakysteinfeld@outlook.com' style={{ color: 'black' }}><Icon type='mail' style={{ fontSize: '30px', color: 'black' }} /> zakysteinfeld@outlook.com</a>
                        </p>
                    </div>
                    <div style={{ float: 'right' }}>
                        <span>v1.0.0 </span>
                    </div>
                    <div style={{ margin: '1% 0%'}}>
                        <span>Copyright © 2019 </span>
                        <span>Muhamad Zaky</span>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;