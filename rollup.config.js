"use strict";

import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import progress from "rollup-plugin-progress";
import typescript from "rollup-plugin-typescript2";
import screeps from "rollup-plugin-screeps";

let credentials;
const dest = process.env.DEST;

if (!dest) {
  console.log("No destination specified - code will be compiled but not uploaded");
} else if ((credentials = require("./credentials")[dest]) == null) {
  throw new Error("Invalid upload destination");
}

export default {
  input: "src/main.ts",
  plugins: [
    progress({clearLine: true}),
    resolve(),
    commonjs(),
    typescript({tsconfig: "./tsconfig.json"}),
    screeps({config: credentials, dryRun: credentials == null})
  ],
  onwarn: onWarning,
  treeshake: false,
  output: {
    file: "dist/main.js",
    format: "cjs",
    sourcemap: false
  },
}

const ignoreWarnings = [
  "commonjs-proxy",
  "Circular dependency",
  "The 'this' keyword is equivalent to 'undefined'",
  "Use of eval is strongly discouraged"
];

function onWarning(warning) {
  for (let ignoreWarning of ignoreWarnings)
    if (warning.toString().includes(ignoreWarning))
      return;

  console.warn(warning.message);
}
