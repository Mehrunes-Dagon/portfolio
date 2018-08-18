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
  letter-spacing: -.3em;
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
