import React, { Component } from 'react';
import Home from './module/home';
import Bio from './module/bio';
import Head from './module/header';
import Foot from './module/footer';
import { Layout } from 'antd';
import './App.css';
import './assets/css/default.css';

class App extends Component {

  render() {
    const { Content } = Layout;

    return (
      <Layout>
        <Content>
          <div className='layout shadow-layout'>
            <Head />
            <Bio />
          </div>
          <Home />
          <Foot />
        </Content>
      </Layout>
    );
  }
}

export default App;
