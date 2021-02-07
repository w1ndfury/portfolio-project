import React from "react";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Particles from "react-particles-js"
import Header from './components/Header';

function App() {
  return (
      <>
          <Particles
              params={{
                  particles: {
                      number: {
                          value: 30,
                          density: {
                              enable: true,
                              value_area: 1000
                          },
                      line_linked: {
                          shadow: {
                              enable: true,
                              color: "#ffffff",
                              blur: 5
                          }
                      }
                      }
                  }
              }} />
          <Header/>
      </>
  );
}

export default App;
