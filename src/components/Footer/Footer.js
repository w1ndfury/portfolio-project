import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer-wraper pp-text-xx-large">
        <div className="footer-text pp-text-small">
          <div className="copyright">
            <p>
              Copyright &copy;
              <script>document.write(new Date().getFullYear())</script>{" "}
              Panagiotis Patsoglou All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
