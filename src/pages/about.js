import React from 'react';

import PieChart from 'react-simple-pie-chart';

import {
  BodyContainer,
  Page,
  Box,
  Boxx,
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

      <Boxx>
        <Title>Frontend</Title>
        <PieChart
          slices={[
            {
              color: '#f00',
              value: 10,
            },
            {
              color: '#0f0',
              value: 20,
            },
          ]}
        />
        <Title>Frontend</Title>
      </Boxx>
    </Page>
  </BodyContainer>
);

export default AboutPage;
