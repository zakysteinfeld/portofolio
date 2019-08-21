import React, { Component } from 'react';
import { Icon } from 'antd';

export default class CustomScrollTop extends Component {
    render() {
        return(
            <div style={{ float: 'right' }}>
                <a onClick={this.props.scrollTop} style={{ fontSize: '15px' }}><b>Back to top</b> <Icon type='arrow-up' style={{ fontSize: '15px', color: 'black' }} /></a>
            </div>
        );
    }
}