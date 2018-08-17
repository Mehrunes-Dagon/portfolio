import React from 'react';
import Link from 'gatsby-link';

import {
  BodyContainer,
  LandingPic,
  Title,
  Paragraph,
} from '../styles';

const IndexPage = () => (
  <BodyContainer row>
    <div>
      <Title>
        Software Developer
      </Title>
      <Paragraph>
        Hello. I'm William, a full-stack software developer from Los Angeles. I like to build cool stuff.
      </Paragraph>
    </div>
    <LandingPic src='../images/me.jpg' />
  </BodyContainer>
);

export default IndexPage;
