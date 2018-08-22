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
    <Page>
      <Box direction='column'>
        <Title>
          William Winberg
        </Title>
        <Paragraph>
          Hello. I'm William, a full-stack software developer living in the Portland area. I like to make cool things.
        </Paragraph>
      </Box>
      <LandingPic src='../images/me.jpg' />
    </Page>
  </BodyContainer>
);

export default IndexPage;
