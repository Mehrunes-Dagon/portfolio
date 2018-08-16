import React from 'react';

import {
  NavContainer,
  NavLogo,
  NavIcons,
  NavLinks,
  NavLink,
} from './styles';

const Header = ({ siteTitle }) => (
  <NavContainer>
    <NavLogo>WW</NavLogo>
    <NavLinks>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/blog'>Blog</NavLink>
    </NavLinks>
    <NavIcons>
      <img src='../images/mail.png' />
    </NavIcons>
  </NavContainer>
);

export default Header;
