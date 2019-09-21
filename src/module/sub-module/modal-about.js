import React, { Component, Fragment } from 'react';
import { Modal } from 'antd';
import Divider from '@material-ui/core/Divider';

export default class ModalAbout extends Component {
    render() {
        const { status, toggle, lang } = this.props;
        return (
            <Modal
                // title={ lang === 'ja' ? 'について' : 'About'}
                centered
                visible={status}
                onCancel={() => {
                    toggle('About')
                } }
                footer={null}
                closable={false}
            >
                <div className='font-SF-Pro-Display'>
                    <div>{ lang === 'ja' ? 'について' : 'About'}</div>
                    <div className='divider'>
                        <Divider />
                    </div>
                    <p style={{ fontSize: '15px', textAlign: 'justify' }}>{ lang === 'ja' ? 'これはムハマド・ザキのポートフォリオウェブサイトです' : 'This is a portofolio website of Muhamad Zaky' }</p>
                    <p>
                        { lang === 'ja' ? '使用中の別の依存関係' : 'Another dependency in use' }:  <br/>
                        ・antd v3.19.1 <br/>
                        ・bootstrap v4.3.1 <br/>
                        ・react-reveal v1.2.2 <br/>
                        ・moment v2.24.0 <br/>
                        ・universal-cookie v4.0.2 <br/>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        {
                            lang === 'ja' ? <Fragment>&nbsp;&nbsp;&nbsp;私のポートフォリオをご覧いただきありがとうございます！たぶんあなたは私に興味がありますか？ソーシャルメディアまたはメールで連絡してください。 <br/>もう一度ありがとう。乾杯！</Fragment> : <Fragment>&nbsp;&nbsp;&nbsp;Thank you for visiting my portofolio! Maybe you are interested in me? Just contact me via my social media or email. <br/> Thank you once again. Cheers!</Fragment>
                        }
                    </p>
                    <p><b>{ lang === 'ja' ? 'ムハマド・ザキ、よろしくお願いいたします。' : 'Regards, Muhamad Zaky' }</b></p>
                    <p style={{ position: 'absolute', bottom: '0' }}>App Version: 2.4.22</p>
                </div>
            </Modal>
        )
    }
}