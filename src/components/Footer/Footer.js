import React from "react";
import './Footer.css';
import MyParticles from '../MyParticles/MyParticles'



function Footer() {
    return (
        <div>
            <MyParticles />
            <div className="footer-wraper">
                <div className="footer-text">
                    <div class="copyright">
                        <p>Copyright &copy;<script>document.write(new Date().getFullYear())</script> Panagiotis Patsoglou All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
