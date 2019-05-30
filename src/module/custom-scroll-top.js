import React, { Component } from 'react';
import { Icon } from 'antd';

export default class CustomScrollTop extends Component {
    render() {
        return(
            <div style={{ float: 'right' }}>
                <text style={{ fontSize: '15px' }}><b>Back to top</b> <Icon type='arrow-up' style={{ fontSize: '15px', color: 'black' }} /></text>
            </div>
        );
    }
}