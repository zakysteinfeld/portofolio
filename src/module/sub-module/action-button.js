import React, { Component } from 'react';
import { Button } from 'antd';
import Fade from 'react-reveal/Fade';

export default class ActionButton extends Component {
    render() {
        const { response, openModalAction, lang } = this.props;
        return (
            <Fade right cascade collapse>
                <div className='button-float-child'>
                    <Button type='primary' shape='round' size='large' className='shadow-btn' onClick={ () => { openModalAction(response.name) } }>{ localStorage.getItem('lang') === 'ja' ? response.namejp : response.name }</Button>
                </div>
            </Fade>
        )
    }
}