import React from 'react';

import {
  NavContainer,
  NavLogo,
  NavLinks,
  NavLink,
  ExternalLink,
  NavIcons,
  Icon,
} from './styles';

const Header = ({ siteTitle }) => (
  <NavContainer>
    <NavLogo>WW</NavLogo>
    <NavLinks>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>Me</NavLink>
      <NavLink to='/portfolio'>Projects</NavLink>
      <NavLink to='/blog'>Blog</NavLink>
      <NavIcons>
        <ExternalLink
          href='mailto:wtpwinberg@gmail.com'
          alt='Email me'
          target='_top'
        >
          <Icon src='../images/mail.png' />
        </ExternalLink>
        <ExternalLink
          href='https://github.com/Mehrunes-Dagon'
          alt='My GitHub'
        >
          <Icon src='../images/github.png' />
        </ExternalLink>
        <ExternalLink
          href='https://www.linkedin.com/in/william-winberg/'
          alt='My LinkedIn'
        >
          <Icon src='../images/linkedin.png' />
        </ExternalLink>
        <ExternalLink
          href='https://www.facebook.com/william.winberg.3'
          alt='My Facebook'
        >
          <Icon src='../images/facebook.png' />
        </ExternalLink>
      </NavIcons>
    </NavLinks>
  </NavContainer>
);

export default Header;
