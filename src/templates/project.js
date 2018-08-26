import React from "react";
import styled from 'styled-components';

const Demo = styled.div`

`;

import {
  BodyContainer,
  Page,
  Box,
  Paragraph,
} from '../styles';

const Project = (props) => (
  <BodyContainer>
    <Page>
      <ul>
        <li>Rcruit</li>
        <li>rcruit.com</li>
        <li>GitHub</li>
      </ul>
      <Paragraph>
        Rcruit
      </Paragraph>
      <Box>
        <ul>
          <li>Built with</li>
          <li>React</li>
          <li>Express</li>
          <li>Node</li>
          <li>MongoDB</li>
        </ul>
      </Box>
      <Demo>
        <iframe width="420" height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
      </Demo>
    </Page>
  </BodyContainer>
);

export default Project;