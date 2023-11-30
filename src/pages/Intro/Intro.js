import React from "react";
import Typed from "react-typed";

import "./Intro.css";
import LandingPage from "../Landing/Landing";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";

const strings = {
  greetingsMessage: "Hi...",
  firstQuestion: "What's your name?",
  greetingsMessage2: "Hello ",
  firstAnswer:
    ", my name is Panagiotis Patsoglou.</br>I am a Software Engineer!</br> Welcome to my Portfolio Website!",
};

const typingOptions = { typeSpeed: 10, backSpeed: 10 };

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
      <section className="intro-wraper">
        {!this.state.showUI && (
          <div className="pp-flex-column" id="home">
            {!this.state.showSummaryMessage && (
              <div className="ai-question pp-margin-bottom-x-small pp-text-large-30">
                <Typed
                  className="typed-text"
                  strings={[strings.greetingsMessage, strings.firstQuestion]}
                  typeSpeed={typingOptions.typeSpeed}
                  backSpeed={typingOptions.backSpeed}
                  fadeOut={true}
                />
              </div>
            )}
            {!this.state.showSummaryMessage && (
              <div className="fade-in-2 pp-flex-row-center">
                <input
                  type="text"
                  tabIndex={0}
                  aria-label="Type your name"
                  className="pp-input-black pp-width-100 pp-max-width-200"
                  placeholder="Type your name..."
                  onChange={(e) => this.setState({ userName: e.target.value })}
                />
                {this.state.userName != null && (
                  <PrimaryButton
                    label="submit"
                    classNames="pp-margin-left-small"
                    onClick={this.onGiveNameClickHandler}
                  ></PrimaryButton>
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
                        strings.greetingsMessage2 +
                          "<strong>" +
                          this.state.userName +
                          "</strong>" +
                          strings.firstAnswer,
                      ]}
                      typeSpeed={typingOptions.typeSpeed}
                      backSpeed={typingOptions.backSpeed}
                    />
                  )}
              </div>
            </div>
          </div>
        )}

        {this.state.showUI && <LandingPage />}
      </section>
    );
  }
}

export default Intro;
