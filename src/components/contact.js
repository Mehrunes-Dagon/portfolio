import React from 'react';

import {
  ContactContainer,
  Box,
  ContactForm,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
  InfoBoxes,
  InfoBox,
  ExternalLink,
  Title,
  Text,
  Icon,
} from './styles';
import { ChildContainer } from '../styles';

const Contact = (props) => (
  <ContactContainer>
    <ContactForm
      name="contact"
      netlify="true"
      data-netlify="true"
      method="POST"
      data-netlify-honeypot="bot-field"
    >
      <FormInput type="hidden" name="bot-field" />
      <Box>
        <Box direction='column'>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput type="text" name="name" id="name" />
        </Box>
        <Box direction='column'>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput type="text" name="email" id="email" />
        </Box>
      </Box>
      <FormLabel htmlFor="message">Message</FormLabel>
      <FormTextarea name="message" id="message" rows="6" />
      <Box justify='center'>
        <FormButton type="submit" value="Send Message" className="special" />
        <FormButton clear type="reset" value="Clear" />
      </Box>
    </ContactForm>

    <InfoBoxes>
      <InfoBox>
        <Icon src='../images/mail.png' />
        <Text><ExternalLink href="#" color='white'>wtpwinberg@gmail.com</ExternalLink></Text>
      </InfoBox>

      <InfoBox>
        <Icon src='../images/phone.png' />
        <Text>(626) 824-4181</Text>
      </InfoBox>


      <InfoBox>
        <Icon src='../images/location.png' />
        <Text>Vancouver, Washington</Text>
      </InfoBox>

    </InfoBoxes>
  </ContactContainer >
);

export default Contact;
