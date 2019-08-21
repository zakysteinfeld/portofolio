import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends Component {
    render() {
        return(
            <Fragment>
                <Row style={{ margin: '0% 22% 4% 22%', paddingTop: '5%' }}>
                    <Col className='name-box shadow'>
                        <text>Muhamad Zaky</text>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default Header;