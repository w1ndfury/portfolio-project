import React from "react";
import './Experience.css';
import MyParticles from '../MyParticles/MyParticles'
import Work from './Work'
import Carousel from 'react-elastic-carousel'



function Experience() {

    const breakPoints = [
        {width: 1, itemToShow: 1},
        {width: 500, itemToShow: 2},
        {width: 768, itemToShow: 2},
        {width: 1200, itemToShow: 2}
    ];

    const tools_1 = ["React.js","React-Flow-Renderer","Material-UI", "Html", "CSS"];
    const tools_2 = ["MongoDB","Express","React.js","Node.js"];


    return (
        <div>
            <div className="experience-wraper">
                <div className="experience-text">                  
                    <div class="container-fluid px-0 col-12">
                        <div class="row no-gutters">                           
                            <Carousel breakPoints={breakPoints}>
                                <Work 
                                    number = "1"
                                    title = "Cooking-Steam-App" 
                                    info = "A Web Application for creating and processing cooking recipes with flowcharts, in order to create a tool for educational purposes."
                                    link = "https://github.com/w1ndfury/Cooking-Steam-App"
                                    tools = {tools_1}
                                />
                                <Work 
                                    number = "2"
                                    title = "Chilimon-App" 
                                    info = "A Web Application for learning Full Stack Development using MERN Stack Technology."
                                    link = "https://github.com/w1ndfury/Chilimon-App"
                                    tools = {tools_2}
                                />
                            </Carousel>
                                                            
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    );
}

export default Experience;
