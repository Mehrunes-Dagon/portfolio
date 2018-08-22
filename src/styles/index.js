import styled from 'styled-components';
import Link from 'gatsby-link';

const textFont = "'Lora' | serif";
const titleFont = "'Titillium Web' | sans-serif";
const fontColor = 'white';

// PAGES
export const BodyContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
  height: 100%;
  background: rgb(42, 48, 72);
`;
export const ChildContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  font-family: ${titleFont};
  color: ${fontColor};
  font-size: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Paragraph = styled.div`
  font-family: ${textFont};
  color: ${fontColor};
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
   padding-top: 1em;
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

// LANDING 
export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3em;
  max-width: 980px;
  background: #242A41; 
`;
export const Box = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  padding: 2em;
`;
export const LandingPic = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

