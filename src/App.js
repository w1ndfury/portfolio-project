import React from "react";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import MyParticles from './components/MyParticles/MyParticles'
import Intro from './components/Intro/Intro'


function App() {
    return (
       
        <div className="my_app">
          <MyParticles />   
          <Intro/> 
        </div>
        
  );
}

export default App;
