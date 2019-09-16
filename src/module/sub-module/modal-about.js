import React, { Component } from 'react';
import { Modal } from 'antd';

export default class ModalAbout extends Component {
    render() {
        const { status, toggle, lang } = this.props;
        return (
            <Modal
                title={ lang === 'ja' ? 'について' : 'About'}
                centered
                visible={status}
                onCancel={() => {
                    toggle('About')
                } }
                footer={null}
            >
                <div className='font-lexend-deca'>
                    <p style={{ fontSize: '15px', textAlign: 'justify' }}>This is a portofolio website of Muhamad Zaky</p>
                    <p>
                        Another dependency in use:  <br/>
                        ・antd v3.19.1 <br/>
                        ・bootstrap v4.3.1 <br/>
                        ・gh-pages v2.0.1 <br/>
                        ・mdbreact v4.15.0 <br/>
                        ・react-reveal v1.2.2 <br/>
                        ・reactstrap v8.0.0 <br/>
                    </p>
                    <p style={{ textAlign: 'justify' }}>&nbsp;&nbsp;&nbsp;Thank you for visiting my portofolio! Maybe you are interested in me? Just contact me via my social media or email. <br/> Thank you once again. Cheers!</p>
                    <p><b>Regards, Muhamad Zaky</b></p>
                    <p style={{ position: 'absolute', bottom: '0' }}>App Version: 2.4.13</p>
                </div>
            </Modal>
        )
    }
}