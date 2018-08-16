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
export const LandingPic = styled.div`
  background-image: url('../images/me.jpg');
  width: 457px;
  height: 667px;
  border-radius: 50%;
  box-shadow: 0 0 8px 8px white inset;
`;

