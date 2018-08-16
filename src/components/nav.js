import React from 'react';
import Link from 'gatsby-link';

const Header = ({ siteTitle }) => (
  <div style={{ display: 'flex' }}>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/projects'>Projects</Link>
      </li>
      <li>
        <Link to='/blog'>Blog</Link>
      </li>
    </ul>
  </div>
);

export default Header;
