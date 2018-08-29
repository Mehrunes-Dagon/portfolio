import React from "react";
import styled from 'styled-components';

const Demo = styled.div`
  display: grid;
  grid-column: ${props => props.col};
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
        <Title big>
          {props.title}
        </Title>
        <ExternalLink href={props.url}>
          <Icon src='../images/site.png' />
        </ExternalLink>
        <ExternalLink href={props.github}>
          <Icon src='../images/github.png' />
        </ExternalLink>
      </Box>
      <Box justify='center' align='center' padding='2em' gap='2em'>
        <Paragraph>
          {props.summary}
        </Paragraph>
      </Box>
      <Box justify='center' padding='2em' gap='1em'>
        <Title>Built with:</Title>
        <Title small>{props.db}</Title>
        <Title small>{props.other}</Title>
        <Title small>{props.front}</Title>
        <Title small>{props.back}</Title>
      </Box>
      <Demo col='1/4'>
        <iframe width="550" height="415"
          src={props.video}>
        </iframe>
      </Demo>
    </Page>
  </BodyContainer>
);

export default Project;