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
        &emsp;Hello. I'm William, a full-stack software
        developer living in the Portland area. I have a
        background that ranges from acting and film to
        building RC model airplanes and working on cars.
        Needless to say, I like to make cool things.
        From the Stanislavski Method or repairing a
        blown head gasket to server logs, error messages
         and RESTful APIs, I have a near compulsive
         desire to explore the unknown and an affinity for
         building powerful and amazing things that have
         a positive and lasting impact on this
         ever-changing world.
      </Paragraph>
      <LandingPic col='6/8' row='2/6' src='../images/me.jpg' />
    </Page>
  </BodyContainer>
);

export default IndexPage;
