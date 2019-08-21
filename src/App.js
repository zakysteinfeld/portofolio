import React, { Component } from 'react';
import { Layout } from 'antd';
import Fade from 'react-reveal/Fade';
import Home from './module/home';
import './App.css';
import './assets/css/app.css';

class App extends Component {

  render() {
    const { Content } = Layout;

    return (
      <Layout>
        <Content style={{ backgroundColor: 'white' }}>
          <Home/>
        </Content>
      </Layout>
    );
  }
}

export default App;
