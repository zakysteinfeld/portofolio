import React, { Component, Fragment } from 'react';
import { Button, Row, Col } from 'antd';
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
import { getCookies, setCookies, deleteCookies } from './../common/utils/cookies-utils';
import ClickOutside from 'react-click-outside';

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
        lang: '',
        langstat: false,
        welcomeStat: false
    }

    componentWillMount() {
        if (getCookies('lang')) {
            this.setState({ langstat: false, lang: getCookies('lang') })
        } else if (!getCookies('lang')) {
            this.setState({ langstat: false, lang: 'en' })
        }
        this.setState({ showMenuStatus: false })
        this.welcome();
        if (!getCookies('cookiesinfo')) {
            setCookies('cookiesinfo', true)
        }
    }

    componentDidMount() {
        // this.setState({ lang: 'JP', langstat: true })
        setTimeout(() => {
            this.welcome();
        }, 3000);
    }

    welcome = () => {
        this.setState({ welcomeStat: !this.state.welcomeStat })
    }

    showMenu = () => {
        this.setState({ showMenuStatus: true })
    }
    
    closeMenu = () => {
        this.setState({ showMenuStatus: false })
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
        deleteCookies('lang')
        setCookies('lang', lang)
        // console.log('lang', localStorage.getItem('lang'), getCookies('lang'))
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
                {
                    this.state.welcomeStat ?
                        <Fade bottom>
                            <div className='font-lexend-deca' style={{ position: 'fixed', zIndex: '9999', width: '100%', height: '100%', background: 'white', display: 'flex', justifyContent: 'center', verticalAlign: 'middle', padding: '20vw', fontSize: '50px' }}>
                                {this.state.lang === 'ja' ? 'ざきのポートフォリオへようこそ！' : 'Welcome to Zakys Portofolio!'}
                            </div>
                        </Fade>
                        :
                        <Fragment>
                        <div className='app-div'>
                            <Fade bottom>
                                <Intro initialData={this.state} />
                            </Fade>
                            <Fade bottom>
                                <Projects stateData={this.state} status={this.state.projectModalStatus} setToggle={this.projectModalToggle} setContent={this.setProjectModalContent} removeContent={this.removeProjectModalContent} initialData={this.state.projectModalContent} />
                            </Fade>
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
                                <ClickOutside onClickOutside={this.closeMenu}>                                    
                                    {this.state.showMenuStatus === true ?
                                        this.state.menuFloat.map(function (response, index) {
                                            return (
                                                <ActionButton key={index} response={response} openModalAction={openModalAction} />
                                            )
                                        })
                                        : null
                                    }
                                    {this.state.showMenuStatus === true ?
                                        <div className='pull-right'>
                                            <Fade>
                                                <Button type='primary' shape='circle' icon='close' size='large' className='shadow-btn' onClick={() => { this.closeMenu() }} />
                                            </Fade>
                                        </div>
                                        :
                                        <div className='pull-right'>
                                            <Fade>
                                                <Button type='primary' shape='circle' icon='menu' size='large' className='shadow-btn' onClick={() => { this.showMenu() }} />
                                            </Fade>
                                        </div>
                                    }
                                </ClickOutside>                                            
                            </div>
                        </Fade>
                        <ModalInterest status={this.state.interestModalStatus} toggle={openModalAction} lang={this.state.lang} />
                        <ModalAbout status={this.state.aboutModalStatus} toggle={openModalAction} lang={this.state.lang} />
                        </Fragment>
                }
            </Fragment>
        );
    }
}

export default Home;