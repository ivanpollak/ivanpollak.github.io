const context = require.context("./", false, /\.js$/);

const projects = context
  .keys()
  .filter((key) => key !== "./index.js") // Exkludiere die Index-Datei
  .map((key) => context(key).default);

export default projects;
