import React from 'react';

import {
  BodyContainer,
  Page,
  Box,
  Title,
  Paragraph,
  LandingPic,
  List,
  StyledPieChart,
} from '../styles';

const AboutPage = () => (
  <BodyContainer>
    <Page col='repeat(6, 1fr)' row='repeat(12, 1fr)'>
      <Title col='2/4' row='2/3'>
        About Me
      </Title>
      <Paragraph col='2/4' row='3/4'>
        I'm a full stack software engineer from LA, gone PDX. From layouts to sever endpoints, I love building and learning new things.
      </Paragraph>
      <LandingPic col='4/7' row='2/4' src='../images/me2.jpg' />
      <Title col='1/3' row='7'>
        Frontend
      </Title>
      <List col='1/3' row='8/10'>
        <li>Javascript</li>
        <li>React</li>
        <li>Redux</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>styled-components</li>
        <li>bootstrap</li>
        <li>SASS</li>
        <li>GraphQL</li>
      </List>
      <StyledPieChart col='3/5' row='7/11'
        data={[
          { value: 12, key: 'yo', color: '#E38627' },
          { value: 15, color: '#C13C37' },
        ]}
      />
      <Title col='5/7' row='7'>
        Backend
      </Title>
      <List col='5/7' row='8/10'>
        <li>Node</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Python</li>
        <li>Django</li>
        <li>C</li>
      </List>
    </Page>
  </BodyContainer >
);

export default AboutPage;
