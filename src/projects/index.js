const context = require.context("./entries", false, /\.js$/);

const projects = context
  .keys()
  .map((key) => context(key).default);

export default projects;
