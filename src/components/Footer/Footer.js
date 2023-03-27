import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer-wraper pp-box-shadow-purple pp-text-xx-large">
        <div className="footer-text pp-text-small">
          <div className="copyright">
            <p className="pp-margin-bottom-0">
              &copy; {new Date().getFullYear()} Panagiotis Patsoglou
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
