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
    <Page>
      <Box margin='4em 0' gap='4em'>
        <Title row='1' align='end'>
          About Me
        </Title>
        <Paragraph row='2'>
          &emsp;I'm a full stack software engineer from LA, transplanted in the PNW. From layouts to sever endpoints, I love building and learning new things. When I'm not in cyberspace, you'll still usually find me creating things or soaking in the infinite knowledge of this universe in one way or another. That is, unless I'm destroying things, but that's back in cyberspace... Just to clarify, I'm talking about video games.
        </Paragraph>
        <LandingPic col='2' row='1/3' src='../images/me2.jpg' />
      </Box>
      <Box margin='4em 0'>
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
      </Box>
      <Box margin='4em 0'>
        <Title col='1/5' row='11'>
          Other essential life skills:
        </Title>
        <List col='1/3' row='13'>
          <li>Motorcycling</li>
          <li>Paintball</li>
          <li>Cooking</li>
          <li>Camping</li>
          <li>Making movies</li>
          <li>Watching movies</li>
        </List>
      </Box>
    </Page>
  </BodyContainer >
);

export default AboutPage;
