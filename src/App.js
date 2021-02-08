import React from "react";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import MyParticles from './components/MyParticles'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Language from './components/Language'

function App() {
    return (
        <div className="my_app">
        
            <div class="container-fluid px-0">
                <div class="row no-gutters">
                    <div class="col-sm-3">
                        <MyParticles />
                        <Language/>
                    </div>
                    <div class="col-sm-6">
                            <MyParticles />
                            <Header/>
                    </div>
                    <div class="col-sm-3">
                        <MyParticles />
                        <Language/>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default App;
