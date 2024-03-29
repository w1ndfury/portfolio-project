import React, { useState, useEffect } from "react";
import Typed from "react-typed";
import "./Intro.css";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";

const strings = {
  greetingsMessage: "Hi...",
  firstQuestion: "What's your name?",
  greetingsMessage2: "Hello ",
  firstAnswer:
    ", my name is Panagiotis Patsoglou.</br>I am a Software Engineer!</br> Welcome to my Portfolio Website!",
};

const typingOptions = { typeSpeed: 10, backSpeed: 10 };

function Intro() {
  const [showSummaryMessage, setShowSummaryMessage] = useState(false);
  const [userName, setUserName] = useState("");
  const [summaryAnimation, setSummaryAnimation] = useState(false);

  const navigate = useNavigate();

  function onCompleteGreetingsMessage() {
    setSummaryAnimation(true);
    redirectToHome();
  }

  function redirectToHome() {
    setTimeout(() => {
      navigate("/portfolio-project/home");
    }, 3000);
  }
  const handleNameChange = () => {
    setShowSummaryMessage(true);
    sessionStorage.setItem("userName", userName);
  };

  useEffect(() => {
    sessionStorage.removeItem("userName");
  }, []);

  return (
    <section className="intro-wraper">
      <div className="pp-flex-column">
        {!showSummaryMessage && (
          <section>
            <div className="ai-question pp-margin-bottom-x-small pp-text-large-30">
              <Typed
                className="pp-text-gray"
                strings={[strings.greetingsMessage, strings.firstQuestion]}
                typeSpeed={typingOptions.typeSpeed}
                backSpeed={typingOptions.backSpeed}
                fadeOut={true}
              />
            </div>
            <div className="fade-in-2 pp-flex-row-center">
              <input
                type="text"
                tabIndex={0}
                aria-label="Type your name"
                className="pp-input-black pp-width-100 pp-max-width-200"
                placeholder="Type your name..."
                onChange={(e) => setUserName(e.target.value)}
              />
              {userName && (
                <PrimaryButton
                  label="submit"
                  classNames="pp-margin-left-small"
                  value={userName}
                  onClick={handleNameChange}
                ></PrimaryButton>
              )}
            </div>
          </section>
        )}

        <div className="ai-answer pp-text-xx-large">
          <div className={summaryAnimation ? "fade-out-ai-answer" : null}>
            {showSummaryMessage && userName && (
              <Typed
                onComplete={onCompleteGreetingsMessage}
                className="typed-text"
                strings={[
                  strings.greetingsMessage2 +
                    "<strong>" +
                    userName +
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
    </section>
  );
}

export default Intro;
