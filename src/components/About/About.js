import React from "react";
import './About.css';
import MyParticles from '../MyParticles/MyParticles'



function About() {
    return (
        <div>
            <MyParticles />
            <div className="about-wraper">
                <div className="about-text">
                    <p className="my-about-text">
                        I am a software developer from Athens, Greece.
                        <br></br>
                        I am currently working on my Thesis 
                        <br></br>
                        as I am trying to finish my Diploma on Electrical and Computer Engineering.
                        <br></br>
                        I am also learning MERN stack technology since I decided to become a Full Stack Developer.                      
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
