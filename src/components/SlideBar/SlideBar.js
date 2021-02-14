import React from "react";
import './SlideBar.css';




function SlideBar() {
    return (
        <ul className="my_slidebar">

            <li><a class="btn btn-about" href="#about">About</a></li>
            <li><a class="btn btn-experience" href="#experience">Experience</a></li>
            <li><a class="btn btn-contact" href="#contact">Contact</a></li>
        </ul>
    );
}

export default SlideBar;