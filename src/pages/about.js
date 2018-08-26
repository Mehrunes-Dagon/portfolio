import React from 'react';

import {
  BodyContainer,
  Page,
  Box,
  Title,
  Paragraph,
  LandingPic,
  StyledPieChart,
} from '../styles';

const AboutPage = () => (
  <BodyContainer>
    <Page>
      <Title column='1/4'>
        About Me
      </Title>
      <Paragraph column='1/4'>
        I'm a full stack software engineer from LA, gone PDX. From layouts to sever endpoints, I love building and learning new things.
      </Paragraph>
      <LandingPic column='4/7' row='1/2' src='../images/me2.jpg' />
      <Title column='1/3'>
        Frontend
      </Title>
      <StyledPieChart column='3/5' height='400px' />
      <Title column='5/7'>
        Backend
      </Title>
    </Page>
  </BodyContainer >
);

export default AboutPage;
