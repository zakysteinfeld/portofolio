import React, { Component } from 'react';
import { Layout } from 'antd';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './../home/home-page';
import MyStory from './../mystory/mystory-page';
import About from './../about/about-page';
import NotFound404 from './../../common/general-component/404';
import history from './../../common/history';
import { DEV_ENV, PROD_ENV } from './../../common/constant'
import { setCookies } from '../../common/utils/cookies-utils';

class LayoutPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      env: 'DEV_ENV'
    }
  }
  // setLangfromFooter = (value) => {
  //   localStorage.setItem('lang', value)
  // }

  componentWillMount() {
    const env = 'dev'
    if (env === 'dev') {
      this.setState({ env: DEV_ENV})
      setCookies('env', this.state.env)
    } else if (env === 'prod') {
      this.setState({ env: PROD_ENV})
      setCookies('env', this.state.env)
    }
  }
  
  
  render() {
    const { Content } = Layout;
    
    return (
      <Layout>
        <Content className='bg-white'>
          <Router history={history}>
            <Header initialData={this.state} />
            {/* <Layout className='bg-white' style={{ marginTop: 35 }}> */}
            <Layout className='bg-white'>
              <Switch>
                <Route exact path={this.state.env} component={Home} />
                <Route path={this.state.env + 'MyStory'} component={MyStory} />
                <Route path={this.state.env + 'About'} component={About} />
                <Route path={this.state.env + '404-Not-Found'} component={NotFound404} />
              </Switch>
            </Layout>
            <Footer 
              // setLangfromFooter={this.setLangfromFooter} 
            />
          </Router>
        </Content>
      </Layout>
    )
  }
}

export default LayoutPage;