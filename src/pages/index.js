import React from 'react';
import Link from 'gatsby-link';

import {
  BodyContainer,
  LandingPic,
} from './styles';

const IndexPage = () => (
  <BodyContainer>
    <h1>Welcome to my site</h1>
    <LandingPic src='../images/me.jpg' />
  </BodyContainer>
);

export default IndexPage;
