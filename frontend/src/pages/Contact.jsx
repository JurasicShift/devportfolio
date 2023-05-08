import React from "react";
import './Contact.css';
import ContactForm from "../components/ContactForm";
import PageTitle from "../components/PageTitle";

 const Contact = () => {
  return (
    <div className="contact">
      <PageTitle text="Contact" />
      <ContactForm />
    </div>
    
  )
}

export default Contact;
