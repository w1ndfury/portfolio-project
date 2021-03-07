import React from "react";
import './Contact.css';
import MyParticles from '../MyParticles/MyParticles'

import ContactForm from './ContactForm'



function Contact() {
    return (
        <div>
            <div className="contact-wraper">
                <div className="contact-form">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;
