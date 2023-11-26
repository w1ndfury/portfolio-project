import React from "react";
import "./Footer.css";

function Footer() {
  const name = "Panagiotis Patsoglou";
  return (
    <div className="footer-wraper pp-box-shadow-purple pp-text-xx-large">
      <div className="footer-text pp-text-small">
        <div className="copyright">
          <p className="pp-margin-bottom-0">
            &copy; {new Date().getFullYear()} {name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
