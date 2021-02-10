import React from "react";
import Particles from "react-particles-js"
import './MyParticles.css';


function MyParticles() {
    return (
        <>
            <Particles
                className="particles-canvas"
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
        </>
    );
}

export default MyParticles;
