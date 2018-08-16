// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/williamwinberg/Desktop/portfolio/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/williamwinberg/Desktop/portfolio/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/williamwinberg/Desktop/portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/williamwinberg/Desktop/portfolio/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/williamwinberg/Desktop/portfolio/src/pages/about.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/williamwinberg/Desktop/portfolio/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/williamwinberg/Desktop/portfolio/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/williamwinberg/Desktop/portfolio/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/williamwinberg/Desktop/portfolio/.cache/json/layout-index.json"),
  "post-two.json": require("/Users/williamwinberg/Desktop/portfolio/.cache/json/post-two.json"),
  "post-three.json": require("/Users/williamwinberg/Desktop/portfolio/.cache/json/post-three.json"),
  "post-one.json": require("/Users/williamwinberg/Desktop/portfolio/.cache/json/post-one.json"),
  "dev-404-page.json": require("/Users/williamwinberg/Desktop/portfolio/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/williamwinberg/Desktop/portfolio/.cache/json/404.json"),
  "about.json": require("/Users/williamwinberg/Desktop/portfolio/.cache/json/about.json"),
  "blog.json": require("/Users/williamwinberg/Desktop/portfolio/.cache/json/blog.json"),
  "index.json": require("/Users/williamwinberg/Desktop/portfolio/.cache/json/index.json"),
  "page-2.json": require("/Users/williamwinberg/Desktop/portfolio/.cache/json/page-2.json"),
  "404-html.json": require("/Users/williamwinberg/Desktop/portfolio/.cache/json/404-html.json")
}