import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Nav from '../components/nav';
import Footer from '../components/footer';

import './index.css';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Layout = ({ children, data }) => (
  <Container>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'This is William Winberg\'s portfolio' },
        { name: 'keywords', content: 'winberg, william, developer, react, gatsby, blog' },
      ]}
    />
    <Nav />
    {children()}
    <Footer />
  </Container>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
