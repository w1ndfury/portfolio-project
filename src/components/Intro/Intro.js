import React from "react";
import Typed from "react-typed"
import './Intro.css';
import About from '../About/About'
import Experience from '../Experience/Experience'
import Contact from '../Contact/Contact'



class Intro extends React.Component {

    state = {
        showMessage1: false,
        showUI: false,
        name: null
    };

    onButtonClickHandler = () => {
        this.setState({ showMessage1: !this.state.showMessage1 });
    };

    onButtonClickHandler2 = () => {
        this.setState({ showUI: !this.state.showUI });
    };
  

    render() {
        return (
            <div>
                {this.state.showUI &&
                    <ul className="my_slidebar">
                        <li><a class="btn btn-home" href="#home">Home</a></li>
                        <li><a class="btn btn-about"href="#about">About</a></li>
                        <li><a class="btn btn-experience"href="#experience">Experience</a></li>
                        <li><a class="btn btn-contact"href="#contact">Contact</a></li>
                    </ul>
                }

                <div className="header-wraper" id="home">

                    {this.state.showMessage1 && this.state.name != null && this.state.showUI &&
                        <div className="end-of-intro">
                            <Typed
                                className="typed-text"
                                strings={["Welcome to my website!"]}
                                typeSpeed={50}
                                backSpeed={40}
                            />
                        </div>
                    }

                    { !this.state.showMessage1 &&
                        <div className="first-q">
                            <Typed
                                className="typed-text"
                                strings={["Hi...", "What's your name?"]}
                                typeSpeed={50}
                                backSpeed={40}
                            />
                        </div>
                    }

                    { !this.state.showMessage1 &&
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
                            strings={["Hello " + "<strong>" + this.state.name + "</strong>" + "!", "My name is Panagiotis Patsoglou..", "..and I am a Software Engineer!"]}
                            typeSpeed={50}
                            backSpeed={30}                                                       
                            />
                        }
                    </div>

                    {this.state.showMessage1 && this.state.name != null && !this.state.showUI &&
                        <div className="btn-continue">
                        <a href="#about" className="btn-continue-style" onClick={this.onButtonClickHandler2}>continue</a>
                        </div>
                    }
                </div>

                {this.state.showUI &&
                    <div id="container">
                        <div id="about">
                            <div class="container-fluid px-0">
                            <div class="row no-gutters">
                                <div class="col-sm-2">
                                    <>
                                    </>
                                </div>
                                    <div class="col-sm-8">
                                        <About />
                                </div>
                                <div class="col-sm-2">
                                    <>
                                    </>
                                </div>
                            </div>
                        </div>

                        <div id="experience">
                            <div class="container-fluid px-0">
                                <div class="row no-gutters">
                                    <div class="col-sm-2">
                                        <>
                                        </>
                                    </div>
                                    <div class="col-sm-8">
                                        <Experience />
                                    </div>
                                    <div class="col-sm-2">
                                        <>
                                        </>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="contact">
                            <div class="container-fluid px-0">
                                <div class="row no-gutters">
                                    <div class="col-sm-2">
                                        <>
                                        </>
                                    </div>
                                    <div class="col-sm-8">
                                        <Contact />
                                    </div>
                                    <div class="col-sm-2">
                                        {this.state.showUI &&
                                            <div className="down-arrow">
                                                <a href="#home">up</a>
                                            </div>
                                        }
                                    </div>
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
