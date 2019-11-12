import React, { Component } from 'react';
import { Layout } from 'antd';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './../home/home-page';
import NotFound404 from './../../common/general-component/404';
import Header from './header';
import Footer from './footer';
import history from './../../common/history';

class LayoutPage extends Component {
  setLangfromFooter = (value) => {
    localStorage.setItem('lang', value)
  }

  render() {
    const { Content } = Layout;

    return (
      <Layout>
        <Content className='bg-white'>
          <Router history={history}>
            <Header />
            {/* <Layout className='bg-white' style={{ marginTop: 35 }}> */}
            <Layout className='bg-white'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/404-Not-Found' component={NotFound404} />
              </Switch>
            </Layout>
            <Footer setLangfromFooter={this.setLangfromFooter} />
          </Router>
        </Content>
      </Layout>
    )
  }
}

export default LayoutPage;