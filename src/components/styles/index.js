import styled from 'styled-components';
import Link from 'gatsby-link';

const textFont = "'Lora' | serif";
const titleFont = "'Titillium Web' | sans-serif";

// GLOBAL
export const ExternalLink = styled.a.attrs({
  target: '_blank',
})`
  &:hover {
    text-decoration: none;
    opacity: .5;
  }
`;
export const Box = styled.div`
  display: flex;
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
  height: 700px;
`;
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const FormLabel = styled.label`

`;
export const FormInput = styled.input`

`;
export const FormTextarea = styled.input`

`;
export const FormButton = styled.input`
 
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  font-size: 1.5em;
`;
export const Text = styled.p`

`;
