# phpcbf-cli

`phpcbf` is a great tool for linting and formatting PHP code but it uses non-standard exit codes which cause it to not be compatible with other tools. The usage of this tool is exactly the same as `phpcbf` however it standardizes it's exit code.

## Install

This tool requries that you have `phpcbf` installed and on your path. Installation instructions can be found here: https://github.com/squizlabs/PHP_CodeSniffer

```bash
t npm i -D phpcbf-cli
```

## Usage

Exact same usage as phpcbf execuitable

```bash
phpcbf-cli --standard=PSR2 -n path/to/some/file.php
```
