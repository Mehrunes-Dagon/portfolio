import React from 'react';

import Contact from '../components/contact.js';

import {
  BodyContainer,
  Title,
  Paragraph,
} from '../styles';

const ContactPage = () => (
  <BodyContainer>
    <Title>About Me:</Title>
    <Paragraph>Sup! I'm p cool</Paragraph>
    <Contact />
  </BodyContainer>
);

export default ContactPage;
