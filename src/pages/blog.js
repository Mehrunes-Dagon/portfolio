import React from 'react';
import Link from 'gatsby-link';

import {
  BodyContainer,
} from '../styles';

const BlogPage = ({ data }) => (
  <BodyContainer>
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map((post) => (
      <div key={post.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}
        </small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>More</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </BodyContainer>
);

export const pageQuery = graphql`
query BlogIndexQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          path
          title
          date
          author
        }
      }
    }
  }
}`;

export default BlogPage;