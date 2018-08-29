import React from 'react';

import Project from '../templates/project.js';
import {
  BodyContainer,
  Page,
} from '../styles';

const PortfolioPage = () => (
  <BodyContainer>
    <Page>
      <Project
        title='Rcruit'
        url='https://rcruit.app'
        github='https://github.com/Lambda-School-Labs/CS8-jobme'
        summary='Rcruit is a Tinder-like employment app for matching job seekers with the jobs they want and employers with the qualified employees they need.'
        tech={['React', 'Express', 'Node', 'MongoDB']}
      />
      <Project />
      <Project />
      <Project />
    </Page>
  </BodyContainer>
);

export default PortfolioPage;