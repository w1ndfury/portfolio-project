import React from "react";
import Typed from "react-typed";

import "./Intro.css";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import SlideBar from "../SlideBar/SlideBar";

const greetingsMessage = "Hi...";
const firstQuestion = "What's your name?";

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSummaryMessage: false,
      showUI: false,
      userName: null,
      summaryAnimation: false,
    };

    this.onGiveNameClickHandler = this.onGiveNameClickHandler.bind(this);
  }

  onGiveNameClickHandler = () => {
    this.setState({ showSummaryMessage: !this.state.showSummaryMessage });
  };

  onCompleteGreetingsMessage = () => {
    this.setState({ summaryAnimation: !this.state.summaryAnimation });
    setTimeout(() => {
      this.setState({ showUI: !this.state.showUI });
    }, 3000);
  };

  render() {
    return (
      <div>
        {!this.state.showUI && (
          <div className="pp-flex-column intro-wraper" id="home">
            {!this.state.showSummaryMessage && (
              <div className="ai-question pp-margin-bottom-x-small pp-text-large-30">
                <Typed
                  className="typed-text"
                  strings={[greetingsMessage, firstQuestion]}
                  typeSpeed={25}
                  backSpeed={20}
                  fadeOut={true}
                />
              </div>
            )}
            {!this.state.showSummaryMessage && (
              <div className="fade-in-2 pp-flex-row-center">
                <input
                  style={{ "max-width": "200px" }}
                  className="pp-input-black pp-width-100"
                  type="text"
                  placeholder="Type your name..."
                  onChange={(e) => this.setState({ userName: e.target.value })}
                />
                {this.state.userName != null && (
                  <button
                    className="btn-transparent-gray pp-margin-left-small"
                    onClick={this.onGiveNameClickHandler}
                  >
                    submit
                  </button>
                )}
              </div>
            )}
            <div className="ai-answer pp-text-xx-large">
              <div
                className={
                  this.state.summaryAnimation ? "fade-out-ai-answer" : null
                }
              >
                {this.state.showSummaryMessage &&
                  this.state.userName != null &&
                  !this.state.showUI && (
                    <Typed
                      onComplete={this.onCompleteGreetingsMessage}
                      className="typed-text"
                      strings={[
                        "Hello <strong>" +
                          this.state.userName +
                          "</strong>, my name is Panagiotis Patsoglou.</br>I am a Software Engineer!</br> Welcome to my Portfolio Website!",
                      ]}
                      typeSpeed={25}
                      backSpeed={20}
                    />
                  )}
              </div>
            </div>
          </div>
        )}

        {this.state.showUI && <SlideBar />}
        {this.state.showUI && (
          <div className="pp-flex-column">
            <div className="pp-section-wraper" id="about">
              <About />
            </div>
            <div className="pp-section-wraper" id="experience">
              <Experience />
            </div>
            <div className="pp-section-wraper" id="contact">
              <Contact />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Intro;
