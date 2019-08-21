import React, { Component } from 'react';
import { Icon, Row } from 'antd';
import Divider from '@material-ui/core/Divider';

export default class Footer extends Component {
    render() {
        return(
            <div className='footer'>
                <Row>
                    <p className='socmed-p'>
                        <text style={{ fontSize: '15px', paddingRight: '10px' }}>Reach me at: </text>
                        <a className='socmed' href='https://twitter.com/zakysteinfeld' target='_blank' style={{ color: 'black' }}><Icon type='twitter' style={{ fontSize: '25px', color: 'black' }} /></a>
                        <a className='socmed' href='https://instagram.com/zakysteinfeld' target='_blank' style={{ color: 'black' }}><Icon type='instagram' style={{ fontSize: '25px', color: 'black' }} /></a>
                        <a className='socmed' href='https://www.linkedin.com/in/muhamadzaky/' target='_blank' style={{ color: 'black' }}><Icon type='linkedin' style={{ fontSize: '25px', color: 'black' }} /></a>
                    </p>
                </Row>
                <Row className='devider'>
                    <Divider />
                </Row>
                <Row className='socmed-p'>
                    <p className='sendmemail-div'>
                        <a className='sendmemail' href='mailto:zakysteinfeld@outlook.com'>Send me email!</a>
                    </p>
                </Row>
                <Row className='devider'>
                    <Divider />
                </Row>
                <Row className='socmed-p cpr'>
                    <span>Copyright © 2019 </span>
                    <span> ・ Developed by Muhamad Zaky </span>
                </Row>
            </div>
        )
    }   
}