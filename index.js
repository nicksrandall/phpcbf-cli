#!/usr/bin/env node

const path = require('path');
const {spawn} = require('child_process');

new Promise((resolve, reject) => {
  const args = [path.resolve(__dirname, './phpcbf.phar')].concat(
    process.argv.slice(2),
  );
  const phpcbf = spawn('php', args);
  phpcbf.stdout.on('data', data => console.log(data.toString()));
  phpcbf.stderr.on('data', data => console.log(`stderr: ${data}`));
  phpcbf.on('close', code => (code < 2 ? resolve(code) : reject(code)));
})
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
