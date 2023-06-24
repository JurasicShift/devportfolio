import React from "react";
import './Contact.css';
import ContactForm from "../components/ContactForm";
import PageTitle from "../components/PageTitle";
import Icons from "../components/Icons";

 const Contact = () => {
  return (
    <div className="contact">
      <PageTitle text="Contact" />
      <ContactForm />
      <Icons />
    </div>
    
  )
}

export default Contact;
