#!/usr/bin/env node

const { spawn } = require('child_process');

new Promise(function(resolve, reject) {
  const phpcbf = spawn('phpcbf', process.argv.slice(2));
  phpcbf.stdout.on('data', data => {
    console.log(`${data}`);
  });
  phpcbf.stderr.on('data', data => {
    console.log(`stderr: ${data}`);
  });
  phpcbf.on('close', code => {
    if (code > 1) {
      reject(
        new Error(
          `There was a problem fixing coding problems. Returned exit code: ${code}`
        )
      );
      return;
    }
    resolve(code);
  });
})
  .then(() => {
    process.exit(0);
  })
  .catch(() => {
    process.exit(1);
  });
