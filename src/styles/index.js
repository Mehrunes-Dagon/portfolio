import styled from 'styled-components';
import Link from 'gatsby-link';

import PieChart from 'react-minimal-pie-chart';
import Slideshow from 'react-slidez';

const textFont = "'Lora' | serif";
const titleFont = "'Titillium Web' | sans-serif";
const fontColor = 'white';

// PAGES
export const BodyContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: ${props => (props.center ? 'center' : '')};
  height: 80vh;
  background: rgb(42, 48, 72);
`;
export const ChildContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.col ? 'column' : 'row')};
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  display: grid;
  grid-column: ${props => props.col};
  grid-row: ${props => props.row};
  font-family: ${titleFont};
  align-items: ${props => props.align};
  justify-items: ${props => props.justify};
  color: ${fontColor};
  font-size: ${props => {
    if (props.small) return '2em';
    else if (props.big) return '5em';
    else return '3em';
  }};
`;
export const Paragraph = styled.div`
  display: grid;
  grid-column: ${props => props.col};
  grid-row: ${props => props.row};
  align-items: ${props => props.align};
  padding: ${props => props.padding};
  justify-items: ${props => props.justify};
  font-family: ${textFont};
  color: ${fontColor};
  font-size: 1em;
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
  display: grid;
  grid-template-columns: ${props => props.col};
  grid-template-rows: ${props => props.row};
  padding: 4em;
  justify-items: center;
  align-items: top;
  max-width: 980px;
  min-height: 0;
  max-height: 80vh;
  background: #242A41;
  overflow: auto;
`;
export const Box = styled.div`
  display: grid;
  grid-column: ${props => props.col};
  grid-row: ${props => props.row};
  column-gap: ${props => props.gap};
  align-items: ${props => props.align};
  justify-items: ${props => props.justify};
  padding: ${props => props.padding};
  margin-bottom: 4em;
  width: 100%;
`;
export const List = styled.ul`
  display: grid;
  grid-column: ${props => props.col};
  grid-row: ${props => props.row};
  grid-gap: ${props => props.gap};
  align-items: ${props => props.align};
  justify-items: ${props => props.justify};
  padding: ${props => props.padding};
  font-family: ${titleFont};
  color: ${fontColor};
  line-height: 1.5em;
  margin: 0;
`;
// grid - column - gap: 1em;
// grid - row - gap: 1em;
// grid - gap: 1em;
// grid - auto - rows: minmax(100px, auto);
// justify - items: center;
// align - items: center;
export const StyledPieChart = styled(PieChart)`
  display: grid;
  grid-column: ${props => props.col};
  grid-row: ${props => props.row};
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`;
export const StyledSlideshow = styled(Slideshow)`
  display: grid;
  grid-column: ${props => props.col};
  grid-row: ${props => props.row};
  width: 500px;
  height: 300px;
`;

export const LandingPic = styled.img`
  display: grid;
  grid-column: ${props => props.col};
  grid-row: ${props => props.row};
  width: 2fr;
  height: 300px;
  border-radius: 100%;
`;
// grid-template-columns: 70% 30%;

// PORTFOLIO
export const Icon = styled.img`
  margin: 0 .5em;
  height: 50px;
  width: 50px;
`;