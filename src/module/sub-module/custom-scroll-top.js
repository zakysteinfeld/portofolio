import React, { Component } from 'react';
import { Icon } from 'antd';

export default class CustomScrollTop extends Component {
    render() {
        return(
            <div style={{ float: 'right' }}>
                <a className='backtotop'><b>{ this.props.lang === 'ja' ? 'トップに戻る' : 'Back to top'}</b> <Icon type='arrow-up' /></a>
            </div>
        );
    }
}