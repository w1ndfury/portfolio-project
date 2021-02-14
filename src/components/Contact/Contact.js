import React from "react";
import './Contact.css';
import MyParticles from '../MyParticles/MyParticles'

import ContactForm from './ContactForm'



function Contact() {
    return (
        <div>
            <MyParticles />
            <div className="contact-wraper">
                <ContactForm/>
            </div>
        </div>
    );
}

export default Contact;
