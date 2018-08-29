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
        front='React'
        back='node.js'
        db='mongoDB'
        other='Express'
        video='https://www.youtube.com/embed/ktvPM-_dy8Y'
      />
      <Project />
      <Project />
      <Project />
    </Page>
  </BodyContainer>
);

export default PortfolioPage;