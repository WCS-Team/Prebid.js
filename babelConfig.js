let path = require('path');

module.exports = function (options = {}) {
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "entry",
          corejs: "3.13.0",
          // a lot of tests use sinon.stub & others that stopped working on ES6 modules with webpack 5
          modules: options.test ? "commonjs" : "auto",
        },
      ],
    ],
    plugins: (() => {
      const plugins = [
        [path.resolve(__dirname, "./plugins/pbjsGlobals.js"), options],
        ["@babel/plugin-transform-runtime"],
      ];
      if (options.codeCoverage) {
        plugins.push(["babel-plugin-istanbul"]);
      }
      return plugins;
    })(),
  };
};
