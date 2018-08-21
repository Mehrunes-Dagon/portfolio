import React from 'react';

import {
  FooterContainer,
  FooterLinks,
  FooterLink,
} from './styles';

const Footer = ({ siteTitle }) => (
  <FooterContainer>
    <FooterLinks>
      <FooterLink to='/about'>About</FooterLink>
      <FooterLink to='/portfolio'>Portfolio</FooterLink>
      <FooterLink to='/blog'>Blog</FooterLink>
      <FooterLink to='/contact'>Contact</FooterLink>
    </FooterLinks>
  </FooterContainer >
);

export default Footer;
