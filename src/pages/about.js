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
      <Box>
        <Box direction='column'>
          <Title>About Me</Title>
          <Paragraph>I'm a full stack software engineer from LA, gone PDX. From layouts to sever endpoints, I love building and learning new things.</Paragraph>
        </Box>
        <LandingPic src='../images/me2.jpg' />
      </Box>
      <div
        style={{
          display: 'grid',
          grid: 'grid-template-columns',
          width: '500px'
        }}>
        <Title>Frontend</Title>
        <SkillsPieChart />
        <Title>Backend</Title>
      </div>
    </Page>
  </BodyContainer >
);

export default AboutPage;
