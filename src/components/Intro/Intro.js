import React from "react";
import Typed from "react-typed"
import './Intro.css';
import About from '../About/About'
import Experience from '../Experience/Experience'
import Contact from '../Contact/Contact'
import SlideBar from '../SlideBar/SlideBar'



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
        /*this.myStyle = this.myStyle.bind(this);*/
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
                            strings={["Hello " + "<strong>" + this.state.name + "</strong>" + "!", "My name is Panagiotis Patsoglou..", "..and I am a Software Developer!", "Welcome to my website!"]}
                                    typeSpeed={50}
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
                    <div id="slidebar" className="slidebar">
                        <SlideBar />
                    </div>
                }
                
                {this.state.showUI &&
                    <div className="page-after-intro" id="container">
                        <div id="about">
                            <div class="container-fluid px-0">
                                <div class="row no-gutters">
                                    <div class="col-sm-12">
                                        <About />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="experience">
                            <div class="container-fluid px-0">
                                <div class="row no-gutters">s
                                    <div class="col-sm-12">
                                        <Experience />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="contact">
                            <div class="container-fluid px-0">
                                <div class="row no-gutters">
                                    <div class="col-sm-12">
                                        <Contact />
                                        {this.state.showUI &&
                                            <div className="down-arrow">
                                                <a href="#about">up</a>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>           
                    </div>
                }

            </div>
            
        );
    }
}

export default Intro
