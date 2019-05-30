import React, { Component } from 'react';
import { Icon } from 'antd';

class Footer extends Component {
    render() {
        return(
            <footer>
                <div className='footer'>
                    <p>
                        <a href='https://twitter.com/zakysteinfeld' style={{ color: 'black' }}><Icon type='twitter' style={{ fontSize: '30px', color: 'black' }} /> @zakysteinfeld</a>
                        &nbsp;&nbsp;
                        &nbsp;&nbsp;
                        <a href='https://instagram.com/zakysteinfeld' style={{ color: 'black' }}><Icon type='instagram' style={{ fontSize: '30px', color: 'black' }} /> @zakysteinfeld</a>
                        &nbsp;&nbsp;
                        &nbsp;&nbsp;
                        <a href='https://www.linkedin.com/in/muhamadzaky/' style={{ color: 'black' }}><Icon type='linkedin' style={{ fontSize: '30px', color: 'black' }} /> Muhamad Zaky</a>
                        &nbsp;&nbsp;
                        &nbsp;&nbsp;
                        <a href='mailto:zakysteinfeld@outlook.com' style={{ color: 'black' }}><Icon type='mail' style={{ fontSize: '30px', color: 'black' }} /> zakysteinfeld@outlook.com</a>
                    </p>
                    <span>Copyright © 2019 </span>
                    <span>Muhamad Zaky</span>
                </div>
            </footer>
        );
    }
}

export default Footer;