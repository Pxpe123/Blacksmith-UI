import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [discord, setDiscord] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here, such as sending data to a server
    console.log("Form submitted:", { email, username, discord, message });
  };

  return (
    <div className="contact-home">
      <div className="Contact-Title-Frame">Contact Us</div>
      <div className="Contact-Blurb">
        <p>
          Have questions, suggestions, or need assistance? We're here to help!
          Feel free to reach out to us through our Discord ticket system or by
          using the forms below.
        </p>
      </div>
      <div className="ContactUs-Frame">
        <form className="Form-Main" onSubmit={handleSubmit}>
          <div className="Form-Input-Div">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
          </div>
          <div className="Form-Input-Div">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Username</label>
          </div>
          <div className="Form-Input-Div">
            <input
              type="text"
              value={discord}
              onChange={(e) => setDiscord(e.target.value)}
              required
            />
            <label>Discord</label>
          </div>
          <div className="Form-TextArea-Div">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <label>Message</label>
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
