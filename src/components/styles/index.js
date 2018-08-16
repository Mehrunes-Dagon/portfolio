import styled from 'styled-components';
import Link from 'gatsby-link';

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em;
  background: black;
`;
export const NavLogo = styled.a`
  font-family: 'Jacques Francois Shadow';
  font-size: 4em;
  letter-spacing: -.3em;
  color: white;
`;
export const NavLinks = styled.div`
  
`;
export const NavLink = styled(Link)`
  color: white;
  margin: 1em;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: gray;
  }
`;
export const NavIcons = styled.div`
  
`;