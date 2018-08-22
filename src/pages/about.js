import React from 'react';

import {
  BodyContainer,
  Page,
  Box,
  Title,
  Paragraph,
  LandingPic,
} from '../styles';

const AboutPage = () => (
  <BodyContainer>
    <Page>
      <Box direction='column'>
        <Title>About Me</Title>
        <Paragraph>I'm a full stack software engineer from LA, gone PDX. From layouts to sever endpoints, I love building and learning new things.</Paragraph>
      </Box>
      <LandingPic src='../images/me2.jpg' />
    </Page>
  </BodyContainer>
);

export default AboutPage;
