import React from "react";

import "./Contact.scss";

const Contact = () => {
  const phoneNumber = "1-514-888-8888";
  const email = "something@gmail.com";
  return (
    <section id="Contact">
      <h2 className="section-header"> Contact </h2>
      <h2 className="section-description">Reach out to us!</h2>
      <div className="details">
        <h3>By phone at:</h3>

        <p>{phoneNumber}</p>
        <h3>By email at:</h3>
        <p>{email}</p>
      </div>
    </section>
  );
};

export default Contact;
