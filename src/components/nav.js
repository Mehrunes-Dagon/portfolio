import React from 'react';
import Link from 'gatsby-link';

const Header = ({ siteTitle }) => (
  <div>
    <ul style={{ display: 'flex', flexDirection: 'spaceAround' }}>
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
