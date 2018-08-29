import React from 'react';
import Link from 'gatsby-link';

import {
  BodyContainer,
  Page,
  Box,
  LandingPic,
  Title,
  Paragraph,
} from '../styles';

const IndexPage = () => (
  <BodyContainer row>
    <Page col='repeat(8, 1fr)' row='repeat(8, 1fr)'>
      <Title col='2/5' row='2' align='center'>
        William Winberg
      </Title>
      <Paragraph col='2/5' row='3' >
        Hello. I'm William, a full-stack software developer living in the Portland area. I like to make cool things. I have a near compulsive desire to explore the unknown.
      </Paragraph>
      <LandingPic col='6/8' row='2/6' src='../images/me.jpg' />
    </Page>
  </BodyContainer>
);

export default IndexPage;
