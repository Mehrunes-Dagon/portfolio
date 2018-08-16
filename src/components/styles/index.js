import styled from 'styled-components';
import Link from 'gatsby-link';

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
  padding: 1.5em;
  background: black;
`;
export const NavLogo = styled.a`
  font-family: 'Jacques Francois Shadow';
  font-size: 5em;
  letter-spacing: -.3em;
  color: white;
`;
export const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;
export const NavLink = styled(Link)`
  font-size: 1.4em;
  color: white;
  margin: 0 .5em;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    opacity: .5;
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

