import React from 'react';

import {
  BodyContainer,
  Page,
  Box,
  Title,
  Paragraph,
  LandingPic,
  StyledSlideshow,
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
      <Box margin='4em 0' justify='center'>
        <Title col='1' row='1' justify='center'>
          Frontend
        </Title>
        <List col='1' row='2'>
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
        <StyledPieChart col='2' row='1/3'
          data={[
            { value: 12, color: '#00FFFF' },
            { value: 15, color: '	#008B8B' },
          ]}
        />
        <Title col='3' row='1' justify='center'>
          Backend
        </Title>
        <List col='3' row='2'>
          <li>Node</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Python</li>
          <li>Django</li>
          <li>C</li>
        </List>
      </Box>
      <Box margin='4em 0' gap='4em'>
        <Title col='1' row='1'>
          Other essential life skills:
        </Title>
        <List col='1' row='2'>
          <li>Motorcycling</li>
          <li>Paintballing</li>
          <li>Cooking</li>
          <li>Camping</li>
          <li>Making movies</li>
          <li>Watching movies</li>
        </List>
        <StyledSlideshow col='2' row='2'
          showIndex
          showArrows
          autoplay
          enableKeyboard
          useDotIndex
          slideInterval={2000}
          defaultIndex={1}
          slides={['../images/me2.jpg', '../images/me2.jpg']}
          effect={'fade'}
          height={'relative'}
          width={'relative'}
        />
      </Box>
    </Page>
  </BodyContainer >
);

export default AboutPage;
