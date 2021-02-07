import React from "react";
import Typed from "react-typed"
import './Header.css';


function Header() {
    return (
        <div className="header-wraper">
            <div className="main-dialogue">
                <Typed
                    className="typed-text"
                    strings={["Hi...", "What's your name?"]}
                    typeSpeed={70}
                    backSpeed={50}
                />
            </div>
        </div>
    );
}

export default Header;
