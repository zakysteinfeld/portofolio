import React from 'react';
import Home from './module/home';
import Head from './module/header';
import Foot from './module/footer';
import Bio from './module/bio';
import { Layout } from 'antd';
import './App.css';
import './assets/css/default.css';

function App() {
  const { Header, Footer, Content } = Layout;

  return (
    <Layout>
      <Content>
        <div className='layout shadow-layout'>
          <Header>
            <Head />
          </Header>
          <Bio />
        </div>
        <div>
          <Home />
        </div>
        <Footer>
          <Foot />
        </Footer>
      </Content>
    </Layout>
  );
}

export default App;
