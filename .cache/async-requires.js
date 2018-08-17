// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Users/williamwinberg/Desktop/portfolio/src/templates/blog-post.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/williamwinberg/Desktop/portfolio/src/pages/404.js"),
  "component---src-pages-about-js": require("gatsby-module-loader?name=component---src-pages-about-js!/Users/williamwinberg/Desktop/portfolio/src/pages/about.js"),
  "component---src-pages-blog-js": require("gatsby-module-loader?name=component---src-pages-blog-js!/Users/williamwinberg/Desktop/portfolio/src/pages/blog.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/williamwinberg/Desktop/portfolio/src/pages/index.js"),
  "component---src-pages-portfolio-js": require("gatsby-module-loader?name=component---src-pages-portfolio-js!/Users/williamwinberg/Desktop/portfolio/src/pages/portfolio.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/williamwinberg/Desktop/portfolio/.cache/json/layout-index.json"),
  "post-two.json": require("gatsby-module-loader?name=path---post-two!/Users/williamwinberg/Desktop/portfolio/.cache/json/post-two.json"),
  "post-one.json": require("gatsby-module-loader?name=path---post-one!/Users/williamwinberg/Desktop/portfolio/.cache/json/post-one.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/williamwinberg/Desktop/portfolio/.cache/json/404.json"),
  "about.json": require("gatsby-module-loader?name=path---about!/Users/williamwinberg/Desktop/portfolio/.cache/json/about.json"),
  "blog.json": require("gatsby-module-loader?name=path---blog!/Users/williamwinberg/Desktop/portfolio/.cache/json/blog.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/williamwinberg/Desktop/portfolio/.cache/json/index.json"),
  "portfolio.json": require("gatsby-module-loader?name=path---portfolio!/Users/williamwinberg/Desktop/portfolio/.cache/json/portfolio.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/williamwinberg/Desktop/portfolio/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/williamwinberg/Desktop/portfolio/.cache/layouts/index.js")
}