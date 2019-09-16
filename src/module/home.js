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
                namejp: '興味',
                icon: 'plus'
            },
            {
                name: 'About',
                namejp: 'について',
                icon: 'min'
            }
        ],
        projectModalStatus: false,
        projectModalContent: {},
        interestModalStatus: false,
        aboutModalStatus: false,
        ipinfo: {},
        lang: 'en',
        langstat: false
    }

    componentWillMount() {
        this.setState({ showMenuStatus: false })
        this.setState({ langstat: false })
    }

    componentDidMount() {
        // this.setState({ lang: 'JP', langstat: true })
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

    setLang = (lang) => {
        this.setState({ lang: lang, langstat: true })
        localStorage.setItem('lang', lang)
    }

    render() {
        const openModalAction = (param) => {
            if (param === 'Interest') {
                this.setState({ interestModalStatus: !this.state.interestModalStatus })
            } else if (param === 'About') {
                this.setState({ aboutModalStatus: !this.state.aboutModalStatus })
            }
        }

        console.log('lang', this.state.lang)

        return(
            <Fragment>
                <div className='app-div'>
                    <Fade bottom>
                        <Intro initialData={this.state} />
                    </Fade>
                    <Fade bottom>
                        <Projects stateData={this.state} status={this.state.projectModalStatus} setToggle={this.projectModalToggle} setContent={this.setProjectModalContent} removeContent={this.removeProjectModalContent} initialData={this.state.projectModalContent} />
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
                        <ScrollToTop func={this.scrollTop} lang={this.state.lang} />
                    </ScrollUpButton>
                </div>
                <div>
                    <Footer initialData={this.state} setLang={this.setLang} />
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
                                <Button type='primary' shape='circle' icon='close' size='large' className='shadow-btn' onClick={ () => { this.showMenu() } } /> 
                            </Fade> 
                            :
                            <Fade>
                                <Button type='primary' shape='circle' icon='menu' size='large' className='shadow-btn' onClick={ () => { this.showMenu() } } />
                            </Fade>
                        }
                    </div>
                </Fade>
                <ModalInterest status={this.state.interestModalStatus} toggle={openModalAction} lang={this.state.lang} />
                <ModalAbout status={this.state.aboutModalStatus} toggle={openModalAction} lang={this.state.lang} />
            </Fragment>
        );
    }
}

export default Home;