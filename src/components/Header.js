import React from "react";
import Typed from "react-typed"
import './Header.css';


class Header extends React.Component {

    state = {
        showMessage: false,
        name: null
    };

    onButtonClickHandler = () => {
        this.setState({ showMessage: !this.state.showMessage });
    };

    render() {
        return (
            <div className="header-wraper">
                <div className="first-q">
                    <Typed
                        className="typed-text"
                        strings={["Hi...", "What's your name?"]}
                        typeSpeed={70}
                        backSpeed={50}
                    />
                </div>
                <div>
                    
                        <input type="text" placeholder="Give your name.." onChange={e => this.setState({ name: e.target.value })} />
                        <button className="btn-giveYourName"onClick={this.onButtonClickHandler}>submit</button>                 
                </div>
                <div className="ai-talking">
                    {this.state.showMessage && this.state.name != null &&
                        <Typed
                            className="typed-text"
                        strings={["Hello " + this.state.name + "!", "My name is Panagiotis Patsoglou..","..and I am a Software Engineer!","Welcome to my website!"]}
                            typeSpeed={40}
                            backSpeed={30}
                        />
                    }
                </div>
            </div>
        );
    }
}

export default Header
