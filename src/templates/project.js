import React from "react";
import styled from 'styled-components';

const Demo = styled.div`
  display: grid;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
`;

import {
  BodyContainer,
  Page,
  Box,
  ExternalLink,
  Icon,
  Title,
  Paragraph,
} from '../styles';

const Project = (props) => (
  <BodyContainer>
    <Page col='1fr 1fr 1fr'>
      <Box justify='center' padding='2em' gap='2em'>
        <Title>
          {props.title}
        </Title>
        <ExternalLink href={props.url}>
          <Icon src='../images/site.png' />
        </ExternalLink>
        <ExternalLink href={props.github}>
          <Icon src='../images/github.png' />
        </ExternalLink>
      </Box>
      <Box justify='center' padding='2em' gap='2em'>
        <Paragraph>
          {props.summary}
        </Paragraph>
      </Box>
      <Box justify='center' padding='2em' gap='2em'>
        <Title>Built with:</Title>
        <Title small>{props.tech}</Title>
      </Box>
      <Demo column='1/4'>
        <iframe width="420" height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
      </Demo>
    </Page>
  </BodyContainer>
);

export default Project;