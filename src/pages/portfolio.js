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
        summary='&emsp;Rcruit is an employment app for matching job seekers with the jobs they want and employers with the qualified employees they need. It utilizes a swipe interface where potential candidates and employers alike can filter through the fluff in an efficient and straightforward manner eliminates the painstaking and tedious tasks of finding a job or people to hire'
        front='React'
        back='node.js'
        db='mongoDB'
        other='Express'
        video='https://www.youtube.com/embed/ktvPM-_dy8Y'
      />
      <Project />
      <Project />
    </Page>
  </BodyContainer>
);

export default PortfolioPage;