import React from "react";
import './Experience.css';
import MyParticles from '../MyParticles/MyParticles'



function Experience() {
    return (
        <div>
            <MyParticles />
            <div className="experience-wraper">
                <div className="experience-text">                  
                    <div class="container-fluid px-0">
                        <div class="row no-gutters">                           
                                <div className="work-1" class="col-12">
                                    <p>
                                        Cooking-Steam-App
                                    </p> 
                                    <div className="my-link">
                                        <a href="https://github.com/w1ndfury/Cooking-Steam-App" target="_blank">Code</a>
                                        </div>
                                    <br></br>
                                    <div className="inside-1">                                   
                                        <p>Tools & Frameworks :</p>
                                            <ul style={{ color: "red", 'font-size': 18 }}>
                                                <li>React.js</li>
                                                <li>React-Flow-Renderer</li>
                                                <li>Material-UI</li>
                                                <li>Docker</li>
                                                <li>Html</li>
                                                <li>CSS</li>
                                            </ul>                                       
                                    </div>                                    
                                </div>                            
                            <div class="col-12" style={{ "border-top": "1px solid" ,"padding": "10px"}}>
                                    <p>
                                        Ristorante Con Fusion
                                    </p>
                                    <div className="my-link">
                                    <a href="https://github.com/w1ndfury/Bootstrap_Practice" target="_blank">Code</a>
                                    </div>
                                    <br></br>
                                    <div className="inside-1">
                                        <p>Tools & Frameworks :</p>
                                        <ul style={{ color: "red", 'font-size': 18 }}>
                                            <li>Javascript</li>
                                            <li>Html</li>
                                            <li>CSS</li>
                                            <li>Bootstrap 4</li>
                                            <li>JQuery</li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    );
}

export default Experience;
