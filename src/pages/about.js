import React from 'react';

import SkillsPieChart from '../components/pieChart.js';

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
      <Box column='1/3'>
        <Title>About Me</Title>
        <Paragraph>I'm a full stack software engineer from LA, gone PDX. From layouts to sever endpoints, I love building and learning new things.</Paragraph>
      </Box>
      <Box column='3/6'>
        <LandingPic src='../images/me2.jpg' />
      </Box>
      <Box column='1/2'>
        <Title>Frontend</Title>
      </Box>
      <Box column='1/2'>
        <SkillsPieChart />
      </Box>
      <Box column='1/2'>
        <Title>Backend</Title>
      </Box>
    </Page>
  </BodyContainer >
);

export default AboutPage;
