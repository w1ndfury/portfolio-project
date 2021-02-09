import React from "react";
import Typed from "react-typed"
import './Intro.css';


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
                <div className="header-wraper">
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
                        {this.state.showMessage1 && this.state.name != null &&
                            <Typed
                            typedRef={(typed) => { this.typed = typed; }}
                            className="typed-text"
                            strings={["Hello " + "<strong>" + this.state.name + "</strong>" + "!", "My name is Panagiotis Patsoglou..", "..and I am a Software Engineer!", "Welcome to my website!"]}
                            typeSpeed={50}
                            backSpeed={30}                                                       
                            />
                        }
                    </div>

                    {this.state.showMessage1 && this.state.name != null && 
                        <div className="btn-continue">
                        <a href="#about" className="btn-continue-style">continue</a>
                        </div>
                    }

                </div>

                <div className="about-section" id="container">
                    <div id="about">
                        <p>I will develop this section soon.</p>
                    </div>
                </div>

            </div>
            
        );
    }
}

export default Intro
