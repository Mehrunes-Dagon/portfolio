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
    <Page col='repeat(6, 1fr)' row='repeat(12, 1fr)'>
      <Title column='2/4' row='2/3'>
        About Me
      </Title>
      <Paragraph column='2/4' row='3/4'>
        I'm a full stack software engineer from LA, gone PDX. From layouts to sever endpoints, I love building and learning new things.
      </Paragraph>
      <LandingPic column='4/7' row='2/4' src='../images/me2.jpg' />
      <Title column='1/3' row='7/10'>
        Frontend
      </Title>
      <StyledPieChart column='3/5' row='7/11'
        data={[
          { value: 10, color: '#E38627' },
          { value: 15, color: '#C13C37' },
          { value: 20, color: '#6A2135' },
        ]}
      />
      <Title column='5/7' row='7/10'>
        Backend
      </Title>
    </Page>
  </BodyContainer >
);

export default AboutPage;
