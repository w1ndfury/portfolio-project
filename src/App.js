import React from "react";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import MyParticles from './components/MyParticles/MyParticles'
import Intro from './components/Intro/Intro'

function App() {
    return (
        <div className="my_app">
            <MyParticles />        
            <div class="container-fluid px-0">              
                <div class="row no-gutters">                 
                    <div class="col-sm-12">                           
                            <Intro/>
                    </div>

                </div>
            </div>
        </div>
  );
}

export default App;
