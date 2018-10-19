#!/usr/bin/env node

const { spawn } = require("child_process");

new Promise((resolve, reject) => {
  const phpcbf = spawn("phpcbf", process.argv.slice(2));
  phpcbf.stdout.on("data", data => console.log(data));
  phpcbf.stderr.on("data", data => console.log(`stderr: ${data}`));
  phpcbf.on("close", code => (code < 2 ? resolve(code) : reject(code)));
})
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
