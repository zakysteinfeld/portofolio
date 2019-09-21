import React, { Component } from 'react';
import { Button } from 'antd';
import Fade from 'react-reveal/Fade';
import { getCookies } from './../../common/utils/cookies-utils';

export default class ActionButton extends Component {
    state = {
        language: ''
    }
    componentWillMount() {
        this.setState({ language: getCookies('lang') })
    }

    render() {
        const { response, openModalAction, lang } = this.props;
        return (
            <Fade opposite cascade>
                <div className='button-float-child pull-right' style={{ right: '12px', paddingBottom: '10px', paddingRight: '0px' }}>
                    <Button type='primary' shape='round' size='large' className='shadow-btn' onClick={ () => { openModalAction(response.name) } }>{ this.state.language === 'ja' ? response.namejp : response.name }</Button>
                </div>
            </Fade>
        )
    }
}