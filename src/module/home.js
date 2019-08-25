import React, { Component, Fragment } from 'react';
import { Button } from 'antd';
import Fade from 'react-reveal/Fade'
import Intro from './sub-module/intro';
import Projects from './sub-module/project';
import Footer from './footer';
import ScrollToTop from './sub-module/custom-scroll-top';
import ScrollUpButton from 'react-scroll-up-button';

class Home extends Component {
    state = {
        showMenuStatus: false,
        menuFloat: [
            {
                name: 'Interest',
                icon: 'plus'
            },
            {
                name: 'About',
                icon: 'min'
            }
        ],
        projectModalStatus: false,
        projectModalContent: {}
    }

    componentWillMount() {
        this.setState({ showMenuStatus: false })
    }

    showMenu = () => {
        this.setState({ showMenuStatus: !this.state.showMenuStatus })
    }

    projectModalToggle = (boolean) => {
        this.setState({ projectModalStatus: boolean })
    }

    setProjectModalContent = (data) => {
        this.setState({ projectModalContent: data })
    }

    removeProjectModalContent = () => {
        this.setState({ projectModalContent: {} })
    }

    render() {
        return(
            <Fragment>
                <div className='app-div'>
                    <Fade bottom>
                        <Intro />
                    </Fade>
                    <Fade bottom>
                        <Projects status={this.state.projectModalStatus} setToggle={this.projectModalToggle} setContent={this.setProjectModalContent} removeContent={this.removeProjectModalContent} initialData={this.state.projectModalContent} />
                    </Fade>
                </div>
                <div>
                    <ScrollUpButton>
                        <ScrollToTop func={this.scrollTop} />
                    </ScrollUpButton>
                </div>
                <div>
                    <Footer />
                </div>
                <Fade>
                    <div className='button-float'>
                        { this.state.showMenuStatus === true ? 
                            this.state.menuFloat.map(function(response, index) {
                                return (
                                    <Fade right cascade collapse>
                                        <div className='button-float-child'>
                                            <Button type='primary' shape='round' size='large'>{ response.name }</Button>
                                        </div>
                                    </Fade>
                                )
                            })
                            : null
                        }
                        { this.state.showMenuStatus === true ?
                            <Fade>
                                <Button type='primary' shape='circle' icon='close' size='large' onClick={ () => { this.showMenu() } } /> 
                            </Fade> 
                            :
                            <Fade>
                                <Button type='primary' shape='circle' icon='menu' size='large' onClick={ () => { this.showMenu() } } />
                            </Fade>
                        }
                    </div>
                </Fade>
            </Fragment>
        );
    }
}

export default Home;