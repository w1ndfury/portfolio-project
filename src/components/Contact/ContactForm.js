import React, { useState } from "react";
import emailjs from "emailjs-com"

import './ContactForm.css';

function ContactForm() {

    const [showMessage, setshowMessage] = useState(false);

    function sendEmail(e) {
        e.preventDefault();                   
        emailjs.sendForm('service_un119e8', 'template_ti7p9af', e.target, 'user_eK4YBb1ZcEb6M9qYRA19L') /*my_service_id, my_template_id, e.target, my_user_id*/
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
      
    function onButtonClickHandler(){
        setshowMessage(true);
    };

    return (
        <div className="my_form">
            <div class="container-fluid px-0">  
                <form onSubmit={sendEmail}>
                    <div class="row no-gutters"> 
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 form-group pt-3 mx-auto">
                            <input type="submit" className="btn" id="button_submit" value="Send Message" onClick={onButtonClickHandler}></input>
                        </div>
                    </div>
                </form>
                {showMessage &&
                    <div>
                        <p>Thank you. I will check it out soon!</p>
                    </div>
                }
            </div>
        </div>
    );
}

export default ContactForm;