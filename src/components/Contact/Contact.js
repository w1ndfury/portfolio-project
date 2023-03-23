import React from "react";
import "./Contact.css";

import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="pp-section-wraper-body pp-box-shadow-gray">
      <div className="contact-form pp-text-xx-large">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
