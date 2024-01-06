import React, { useState } from "react";
import "./Piano.css";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";

import {
  c5,
  c6,
  c_sharp_5,
  c_sharp_6,
  d5,
  d6,
  e5,
  e6,
  f5,
  f6,
  g5,
  g6,
  a5,
  a6,
  b5,
  b6,
  d_sharp_5,
  d_sharp_6,
  f_sharp_5,
  f_sharp_6,
  g_sharp_5,
  g_sharp_6,
  a_sharp_5,
  a_sharp_6,
} from "../../assets/sounds/index";

function Piano() {
  const [state, setState] = useState(
    Object.fromEntries(
      Array.from({ length: 24 }, (_, index) => [`active${index + 1}`, false])
    )
  );

  const navigate = useNavigate();

  const keyboard = [
    {
      position: 1,
      color: "white",
      note: "C",
      audio: c5,
      active: state.active1,
    },
    { position: 2, color: "black", note: "C#", audio: c_sharp_5 },
    { position: 3, color: "white", note: "D", audio: d5 },
    { position: 4, color: "black", note: "D#", audio: d_sharp_5 },
    { position: 5, color: "white", note: "E", audio: e5 },
    { position: 6, color: "white", note: "F", audio: f5 },
    { position: 7, color: "black", note: "F#", audio: f_sharp_5 },
    { position: 8, color: "white", note: "G", audio: g5 },
    { position: 9, color: "black", note: "G#", audio: g_sharp_5 },
    { position: 10, color: "white", note: "A", audio: a5 },
    { position: 11, color: "black", note: "A#", audio: a_sharp_5 },
    { position: 12, color: "white", note: "B", audio: b5 },
    { position: 13, color: "white", note: "C", audio: c6 },
    { position: 14, color: "black", note: "C#", audio: c_sharp_6 },
    { position: 15, color: "white", note: "D", audio: d6 },
    { position: 16, color: "black", note: "D#", audio: d_sharp_6 },
    { position: 17, color: "white", note: "E", audio: e6 },
    { position: 18, color: "white", note: "F", audio: f6 },
    { position: 19, color: "black", note: "F#", audio: f_sharp_6 },
    { position: 20, color: "white", note: "G", audio: g6 },
    { position: 21, color: "black", note: "G#", audio: g_sharp_6 },
    { position: 22, color: "white", note: "A", audio: a6 },
    { position: 23, color: "black", note: "A#", audio: a_sharp_6 },
    { position: 24, color: "white", note: "B", audio: b6 },
  ];

  function playNote(note) {
    const audio = new Audio(note);
    audio.play();
  }

  const handleKeyUp = (event, item) => {
    const pressedKey = event.key.toLowerCase();
    const index = keyboard.findIndex(
      (key) => key.note.toLowerCase() === pressedKey
    );
    if (index !== -1) {
      setState((prevState) => ({
        ...prevState,
        [`active${index + 1}`]: false,
      }));
    }
  };

  const handleKeyDown = (event, item) => {
    const pressedKey = event.key.toLowerCase();
    const index = keyboard.findIndex(
      (key) => key.note.toLowerCase() === pressedKey
    );
    if (index !== -1) {
      setState((prevState) => ({ ...prevState, [`active${index + 1}`]: true }));
      playNote(keyboard[index].audio);
    }
  };

  function navigateToPlayground() {
    navigate("/portfolio-project/playground");
  }

  return (
    <section className="piano-page">
      <PrimaryButton
        classNames="piano-back-button"
        label="Back to Playground"
        onClick={navigateToPlayground}
      ></PrimaryButton>
      <section className="piano-container">
        <div className="speaker-container">My Flexbox Layout Piano</div>
        <div className="keyboard-container">
          {keyboard.map((item) => (
            <button
              onClick={() => {
                playNote(item.audio);
              }}
              onKeyDown={(e) => handleKeyDown(e, item)}
              onKeyUp={(e) => handleKeyUp(e, item)}
              key={item.position}
              className={`key ${item.color}-key ${
                state.active1 && item.color === "black"
                  ? "black-key--active"
                  : ""
              } ${
                state.active1 && item.color === "white"
                  ? "white-key--active"
                  : ""
              }`}
            >
              {item.note}
            </button>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Piano;
