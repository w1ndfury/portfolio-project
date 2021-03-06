import React from "react";
import Typed from "react-typed"

import './Intro.css';
import About from '../About/About'
import Experience from '../Experience/Experience'
import Contact from '../Contact/Contact'
import SlideBar from '../SlideBar/SlideBar'
import Footer from '../Footer/Footer'
import MyParticles from '../MyParticles/MyParticles'

import { Container, Row, Col } from 'reactstrap';




class Intro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMessage1: false,
            showUI: false,
            name: null
        }

        this.onButtonClickHandler = this.onButtonClickHandler.bind(this);
        this.onButtonClickHandler2 = this.onButtonClickHandler2.bind(this);
    }

    onButtonClickHandler = () => {
        this.setState({ showMessage1: !this.state.showMessage1 });
    };

    onButtonClickHandler2 = () => {
        this.setState({ showUI: !this.state.showUI });
    };

    render() {
        return (
            <div>                     
                {!this.state.showUI &&
                    <div className="intro-wraper" id="home">
                        {!this.state.showMessage1 &&
                            <div className="first-q">
                                <Typed
                                    className="typed-text"
                                    strings={["Hi...", "What's your name?"]}
                                    typeSpeed={50}
                                    backSpeed={40}
                                />
                            </div>
                        }
                        {!this.state.showMessage1 &&
                            <div className="first-a">
                                <input type="text" placeholder="Give your name.." onChange={e => this.setState({ name: e.target.value })} />
                                {this.state.name != null &&
                                    <button className="btn-giveYourName" onClick={this.onButtonClickHandler}>submit</button>
                                }
                            </div>
                        }
                        <div className="ai-talking">
                            {this.state.showMessage1 && this.state.name != null && !this.state.showUI &&
                                <Typed
                                    typedRef={(typed) => { this.typed = typed; }}
                                    className="typed-text"
                                    strings={["<strong>" + "Hello " + this.state.name + ", my name is Panagiotis Patsoglou." +"</br>" + "</strong>" +
                                    "I am a Software Developer!" + "</br>" + "Welcome to my website!"]}
                                    typeSpeed={20}
                                    backSpeed={30}
                                />
                            }
                        </div>
                        {this.state.showMessage1 && this.state.name != null && !this.state.showUI &&
                            <div className="btn-continue">
                                <a href="#about" className="btn-continue-style" id="btn-continue" onClick={this.onButtonClickHandler2}>continue</a>
                            </div>
                        }
                    </div>
                }

                {this.state.showUI &&
                    <div id="slidebar" className="sticky-navbar">
                        <SlideBar />
                    </div>
                }
                {this.state.showUI &&
                <Container className="themed-container" fluid="sm" style={{ "height": "auto"}}>
                    
                    <Row className="justify-content-md-center">          
                        <Col id="container" className="page-after-intro" xs={12} md={12}>
                            <div id="about">
                                <MyParticles />     
                                <About/>                                       
                            </div>
                            <div id="experience">                                      
                                <Experience />                                               
                            </div>
                            <div id="contact"> 
                                                                                  
                                <Contact />      
                            </div>                                     
                        </Col>  
                        </Row>       
                </Container>
                }
            </div>         
        );
    }
}

export default Intro
