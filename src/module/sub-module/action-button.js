import React, { Component } from 'react';
import { Button } from 'antd';
import Fade from 'react-reveal/Fade';

export default class ActionButton extends Component {
    render() {
        const { response, openModalAction } = this.props;
        return (
            <Fade right cascade collapse>
                <div className='button-float-child'>
                    <Button type='primary' shape='round' size='large' onClick={ () => { openModalAction(response.name) } }>{ response.name }</Button>
                </div>
            </Fade>
        )
    }
}