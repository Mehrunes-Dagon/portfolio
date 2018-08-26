import React from 'react';

import Project from '../templates/project.js';
import {
  BodyContainer,
  Page,
} from '../styles';

const PortfolioPage = () => (
  <BodyContainer>
    <Page>
      <Project />
      <Project />
      <Project />
      <Project />
    </Page>
  </BodyContainer>
);

export default PortfolioPage;