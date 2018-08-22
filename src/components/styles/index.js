import styled from 'styled-components';
import Link from 'gatsby-link';

const textFont = "'Lora' | serif";
const titleFont = "'Titillium Web' | sans-serif";
const fontColor = 'white';

// GLOBAL
export const ExternalLink = styled.a.attrs({
  target: '_blank',
})`
  color: ${props => props.color};
  &:hover {
    text-decoration: none;
    opacity: .5;
  }
`;
export const Box = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
`;

// NAV
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 5em;
  background: black;
`;
export const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;
export const NavLink = styled(Link)`
  font-size: 1.4em;
  font-family: Lora;
  color: white;
  margin: 0 .4em;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    opacity: .5;
  }
`;
export const NavLogo = NavLink.extend`
  font-family: 'Jacques Francois Shadow';
  font-size: 5em;
  margin: 0;
  letter-spacing: -.3em;
  &:hover {
    opacity: 1;
  }
`;
export const NavIcons = styled.div`
  margin-left: 2em;
`;
export const Icon = styled.img`
  margin: 0 .5em;
  height: 50px;
  width: 50px;
`;

// FOOTER
export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 5em;
  border-top: 1px solid lightgray;
  bottom: 0;
`;
export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
`;
export const FooterLink = styled(Link)`
  font-size: 1.4em;
  font-family: Lora;
  color: black;
  margin: 0 .4em;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    opacity: .5;
  }
`;

// CONTACT
export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 980px;
  background: #242A41;
`;
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 2px solid #2B3046;
  padding: 2em;
`;
export const FormLabel = styled.label`
  font-size: 1.5em;
  margin: 1em 1em .5em 1em;
  color: ${fontColor};
`;
export const FormInput = styled.input`
  padding: .5em;
  margin: 0 1em;
  background: #2B3046;
  border: 2px solid #2B3046;
  color: ${fontColor};
`;
export const FormTextarea = styled.input`
  padding: .5em;
  margin: 0 1em;
  background: #2B3046;
  border: 2px solid #2B3046;
  color: ${fontColor};
`;
export const FormButton = styled.input`
 margin: 1em;
 padding: .5em 1em;
 font-size: 1.5em;
 background: ${props => (props.clear ? '#2B3046' : 'white')};
 color: ${props => (props.clear ? 'white' : '#2B3046')};
 border: 2px solid white;
`;
export const InfoBoxes = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
`;
export const InfoBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 2em;
  border: 2px solid #2B3046;
`;
export const Title = styled.div`
  font-size: 1.5em;
  color: ${fontColor};
`;
export const Text = styled.p`
  color: ${fontColor};
  padding-left: 2em;
`;
