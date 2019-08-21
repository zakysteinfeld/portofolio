import React, { Component, Fragment } from 'react';
import AboutMe from './about-me';
import EduCareer from './edu-career';
import Interest from './interest';
import Project from './project';

class Home extends Component {

    render() {
        return(
            <Fragment>
                {/* <div style={{ marginTop: '20px', backgroundColor: '#ecf0f1' }}> */}
                <div>
                    <AboutMe />
                    <EduCareer />
                    <Project />
                    <Interest />
                </div>
            </Fragment>
        );
    }
}

export default Home;