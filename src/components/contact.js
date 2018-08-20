import React from 'react';

import {
  ContactContainer,
} from './styles';

const Contact = (props) => (
  <ContactContainer>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" rows="6" />

      <input type="submit" value="Send Message" className="special" />
      <input type="reset" value="Clear" />
    </form>

    <section className="split">
      <section>
        <div className="contact-method">
          <span className="icon alt fa-envelope"></span>
          <h3>Email</h3>
          <a href="#">wtpwinberg@gmail.com</a>
        </div>
      </section>
      <section>
        <div className="contact-method">
          <span className="icon alt fa-phone"></span>
          <h3>Phone</h3>
          <span>(626) 824-4181</span>
        </div>
      </section>
      <section>
        <div className="contact-method">
          <span className="icon alt fa-home"></span>
          <h3>Location</h3>
          <span>Vancouver, WA<br />
            USA</span>
        </div>
      </section>
    </section>
  </ContactContainer >
);

export default Contact;
