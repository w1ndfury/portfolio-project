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
                                    <strong>Cooking-Steam-App</strong>
                                </p>
                                <p style={{'font-size': 18 }}>
                                    A Web Application for creating and processing cooking recipes with flowcharts, in order to create a tool for educational purposes.
                                </p>
                                <div className="my-link">
                                    <a href="https://github.com/w1ndfury/Cooking-Steam-App" target="_blank">Code</a>
                                    </div>
                                <br></br>
                                <div className="inside-1">                                   
                                    <p><strong>Tools & Frameworks</strong> </p>
                                        <ul style={{ color: "red", 'font-size': 16 }} id="menu">
                                            <li>React.js </li>
                                            <li>React-Flow-Renderer </li>
                                            <li>Material-UI </li>
                                            <li>Html </li>
                                            <li>CSS</li>
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
