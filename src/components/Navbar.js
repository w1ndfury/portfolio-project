import React from "react";
import './Navbar.css';


function Navbar() {
    return (
        <div className="navbar-wraper">
            <div class="navbar-buttons">
                 <button class="btn">About</button>
                 <button class="btn">Works</button>
                 <button class="btn">Contact</button>
             </div>
        </div>
    );
}

export default Navbar;
