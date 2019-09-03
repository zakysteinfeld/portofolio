import React, { Component, Fragment } from 'react';
import { Button } from 'antd';
import Fade from 'react-reveal/Fade';
import Intro from './sub-module/intro';
import Projects from './sub-module/project';
import Footer from './footer';
import ScrollToTop from './sub-module/custom-scroll-top';
import ScrollUpButton from 'react-scroll-up-button';
import ActionButton from './sub-module/action-button';
import ModalInterest from './sub-module/modal-interest';
import ModalAbout from './sub-module/modal-about';
import SectionInterest from './sub-module/section-interests';

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
        projectModalContent: {},
        interestModalStatus: false,
        aboutModalStatus: false
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
        const openModalAction = (param) => {
            if (param === 'Interest') {
                this.setState({ interestModalStatus: !this.state.interestModalStatus })
            } else if (param === 'About') {
                this.setState({ aboutModalStatus: !this.state.aboutModalStatus })
            }
        }

        return(
            <Fragment>
                <div className='app-div'>
                    <Fade bottom>
                        <Intro />
                    </Fade>
                    <Fade bottom>
                        <Projects status={this.state.projectModalStatus} setToggle={this.projectModalToggle} setContent={this.setProjectModalContent} removeContent={this.removeProjectModalContent} initialData={this.state.projectModalContent} />
                    </Fade>
                    {/* {
                        this.state.interestModalStatus === true ? 
                            <Fade bottom>
                                <SectionInterest />
                            </Fade>
                        : null
                    } */}
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
                                    <ActionButton key={index} response={response} openModalAction={openModalAction} />
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
                <ModalInterest status={this.state.interestModalStatus} toggle={openModalAction} />
                <ModalAbout status={this.state.aboutModalStatus} toggle={openModalAction} />
            </Fragment>
        );
    }
}

export default Home;