import styled from 'styled-components';
import Link from 'gatsby-link';

const textFont = "'Lora' | serif";
const titleFont = "'Titillium Web' | sans-serif";

// PAGES
export const BodyContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const ChildContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  font-family: ${titleFont};
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Paragraph = styled.div`
  font-family: ${textFont};
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
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

