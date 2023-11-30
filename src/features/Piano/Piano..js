import React, { useState } from "react";
import "./Piano.css";

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

const keyboard = [
  { position: 1, color: "white", note: "C", audio: c5 },
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

function Piano() {
  const [state, setState] = useState({
    active1: false,
    active2: false,
    active3: false,
    active4: false,
    active5: false,
    active6: false,
    active7: false,
    active8: false,
    active9: false,
    active10: false,
    active11: false,
    active12: false,
    active13: false,
    active14: false,
    active15: false,
    active16: false,
    active17: false,
    active18: false,
    active19: false,
    active20: false,
    active21: false,
    active22: false,
    active23: false,
    active24: false,
  });

  function playNote(note) {
    const audio = new Audio(note);
    audio.play();
  }

  function handleKeyUp(event, item) {
    const pressedKey = event.key.toLowerCase();

    switch (pressedKey) {
      case "a":
        setState((prevState) => ({
          ...prevState,
          active1: false,
        }));
        break;
      case "w":
        break;
      case "s":
        break;
      case "e":
        break;
      case "d":
        break;
      case "f":
        break;
      case "t":
        break;
      case "g":
        break;
      case "y":
        break;
      case "h":
        break;
      case "u":
        break;
      case "j":
        break;
      default:
        break;
    }
  }

  function handleKeyDown(event, item) {
    const pressedKey = event.key.toLowerCase();

    switch (pressedKey) {
      case "a":
        playNote(c5);
        setState((prevState) => ({
          ...prevState,
          active1: true,
        }));
        break;
      case "w":
        playNote(c_sharp_5);
        break;
      case "s":
        playNote(d5);
        break;
      case "e":
        playNote(d_sharp_5);
        break;
      case "d":
        playNote(e5);
        break;
      case "f":
        playNote(f5);
        break;
      case "t":
        playNote(f_sharp_5);
        break;
      case "g":
        playNote(g5);
        break;
      case "y":
        playNote(g_sharp_5);
        break;
      case "h":
        playNote(a5);
        break;
      case "u":
        playNote(a_sharp_5);
        break;
      case "j":
        playNote(b5);
        break;
      default:
        break;
    }
  }

  return (
    <section className="piano-container">
      <div className="speaker-container">My Piano</div>
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
              item.active && item.color === "black" ? "black-key--active" : ""
            } ${
              state.active1 && item.color === "white" ? "white-key--active" : ""
            }`}
          >
            {item.note}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Piano;
