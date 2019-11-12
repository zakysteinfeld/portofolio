import React, { Component, Fragment } from 'react';
import Intro from './../../module/home/intro';
import Project from './../../module/home/project';
import { getCookies } from '../../common/utils/cookies-utils';
import jaJP from './../../common/locale/ja.json';
import enUS from './../../common/locale/en.json';

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrowStatus: false,
      lang: ''
    }
  }

  componentWillMount() {
    const langCookie = getCookies('lang')
    this.setState({ lang: langCookie })
    console.log('language', langCookie)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.lang !== localStorage.getItem('lang')) {
      this.setState({ lang: localStorage.getItem('lang')})
      console.log('language ngeset state')
    }
  }
  

  introArrowOnClick = () => {
    this.setState({ arrowStatus: !this.state.arrowStatus })  
  }

  
  render() {
    const language = this.state.lang === 'en' ? enUS : jaJP
    return (
      <Fragment>
        <Intro arrowOnClick={this.introArrowOnClick} initialData={this.state} language={language} />
        <Project />
      </Fragment>
    )
  }
}

export default HomePage;