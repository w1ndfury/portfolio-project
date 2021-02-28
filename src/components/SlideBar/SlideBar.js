import React from "react";
import './SlideBar.css';

class SideNav extends React.Component{
    render(){
        return(
            <div className="slidebar_background">
                <ul className="my_slidebar">
                    <li><a class="btn btn-about" href="#about">About</a></li>
                    <li><a class="btn btn-experience" href="#experience">Experience</a></li>
                    <li><a class="btn btn-contact" href="#contact">Contact</a></li>
                </ul>
            </div>
        );
    }
}

export default class SlideBar extends React.Component {
    render(){
        return (
            <SideNav/>
        );
    }
}