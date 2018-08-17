import styled from 'styled-components';
import Link from 'gatsby-link';

// PAGES
export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//LINK
export const ExternalLink = styled.a.attrs({
  target: '_blank',
})`
  &:hover {
    text-decoration: none;
    opacity: .5;
  }
`;
export const LandingPic = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  `;

