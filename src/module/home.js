import React, { Component, Fragment } from 'react';
import Intro from './sub-module/intro';
import Projects from './sub-module/project';
import Footer from './footer';
import ScrollToTop from './sub-module/custom-scroll-top';
import ScrollUpButton from 'react-scroll-up-button';

class Home extends Component {
    scrollTop = () => {
        window.scrollTo({y: 0, x: 0, smooth: true});
    }

    render() {
        return(
            <Fragment>
                <div className='app-div'>
                    <Intro />
                    <Projects />
                </div>
                <div>
                    <ScrollUpButton>
                        <ScrollToTop func={this.scrollTop} />
                    </ScrollUpButton>
                </div>
                <div>
                    <Footer />
                </div>
            </Fragment>
        );
    }
}

export default Home;