import React, { Component, Fragment } from 'react';
import { Icon, Row, Col } from 'antd';
import Divider from '@material-ui/core/Divider';
import moment from 'moment';
import 'moment/locale/ja';
import 'moment/locale/id';

export default class Footer extends Component {
    render() {
        const { initialData, setLang } = this.props;
        var momentlocale = moment();
        if (initialData.lang === 'ja') {
            momentlocale.locale('ja');
        } else {
            momentlocale.locale('en');
        }
        const refreshDate = momentlocale.format('llll');
        return(
            <div className='footer'>
                <Row>
                    <p className='socmed-p'>
                        <text style={{ fontSize: '1vw', paddingRight: '0.8vw', fontWeight: 'bold' }}>{ initialData.lang === 'ja' ? '私に連絡してください' : 'Reach me at'}: </text>
                        <a className='socmed' href='https://twitter.com/zakysteinfeld' target='_blank' style={{ color: 'black' }}><Icon type='twitter' style={{ fontSize: '1.6vw', color: 'black' }} /></a>
                        <a className='socmed' href='https://instagram.com/zakysteinfeld' target='_blank' style={{ color: 'black' }}><Icon type='instagram' style={{ fontSize: '1.6vw', color: 'black' }} /></a>
                        <a className='socmed' href='https://www.linkedin.com/in/muhamadzaky/' target='_blank' style={{ color: 'black' }}><Icon type='linkedin' style={{ fontSize: '1.6vw', color: 'black' }} /></a>
                    </p>
                </Row>
                <Row className='devider'>
                    <Divider />
                </Row>
                <Row className='socmed-p'>
                    <p className='sendmemail-div'>
                        <a className='sendmemail' href='mailto:zakysteinfeld@outlook.com'>{ initialData.lang === 'ja' ? 'メールを送ってください' : 'Send me email'}!</a>
                    </p>
                </Row>
                <Row className='devider'>
                    <Divider />
                </Row>
                <Row className='socmed-p cpr font-0comma9vw'>
                    {
                        initialData.lang === 'ja' ?
                            <Fragment>
                                <Col span={11} className='pull-left'>
                                    <span>&copy; 2019 ・ 横山ざきによって開発されました</span>
                                </Col>
                                <Col span={13} className='pull-right'>
                                    <span>このウェブサイトにアクセスする時間は{ refreshDate }です。</span>
                                </Col>
                            </Fragment>
                            :
                            <Fragment>
                                <Col span={12} className='pull-left'>
                                    <span>&copy; 2019 ・ Developed by Muhamad Zaky</span>
                                </Col>
                                <Col span={12} className='pull-right'>
                                    <span>The time you access this website is { refreshDate }.</span>
                                </Col>
                            </Fragment>
                    }
                </Row>
                <Row className='socmed-p cpr font-0comma9vw'>
                    <Col span={4} className='pull-left'>
                        {
                            initialData.lang === 'ja' ?
                                <Fragment>
                                    <span onClick={ () => setLang('en') }>英語</span>
                                    <span>&nbsp;&nbsp;</span>
                                    <span onClick={ () => setLang('ja') }>日本語</span>
                                </Fragment>
                            :
                                <Fragment>
                                    <span onClick={ () => setLang('en') }>English</span>
                                    <span>&nbsp;&nbsp;</span>
                                    <span onClick={ () => setLang('ja') }>Japanese</span>
                                </Fragment>
                        }
                    </Col>
                </Row>
            </div>
        )
    }   
}