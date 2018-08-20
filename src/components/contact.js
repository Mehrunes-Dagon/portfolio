import React from 'react';

import {
  ContactContainer,
  Box,
  ContactForm,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
  InfoBox,
  ExternalLink,
  Title,
  Text,
  Icon,
} from './styles';

const Contact = (props) => (
  <ContactContainer>
    <section>
      <ContactForm
        name="contact"
        method="post"
        data-netlify="true"
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
          <FormButton type="reset" value="Clear" />
        </Box>
      </ContactForm>
    </section>

    <section>
      <InfoBox>
        <Icon />
        <Title>Email</Title>
        <ExternalLink href="#">wtpwinberg@gmail.com</ExternalLink>
      </InfoBox>

      <InfoBox>
        <Icon />
        <Title>Phone</Title>
        <Text>(626) 824-4181</Text>
      </InfoBox>


      <InfoBox>
        <Icon />
        <Title>Location</Title>
        <Text>Vancouver, WA<br />
          USA</Text>
      </InfoBox>

    </section>
  </ContactContainer >
);

export default Contact;
