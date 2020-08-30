# Find chrome version

![Test windows status](https://github.com/ksathyanm/find-edge-version/workflows/test-windows/badge.svg)
![Test macOS status](https://github.com/ksathyanm/find-edge-version/workflows/test-macOS/badge.svg)
![Test linux status](https://github.com/ksathyanm/find-edge-version/workflows/test-linux/badge.svg)

[![NPM Version](https://img.shields.io/npm/v/find-chrome-version)](https://www.npmjs.com/package/find-chrome-version)
[![Node.js Version](https://img.shields.io/node/v/find-chrome-version)](https://nodejs.org/en/download/)
[![NPM Downloads](https://img.shields.io/npm/dw/find-chrome-version)](https://www.npmjs.com/package/find-chrome-version)
[![Known Vulnerabilities](https://snyk.io/test/npm/find-chrome-version/badge.svg)](https://snyk.io/test/npm/find-chrome-version)

Finds installed Chrome version.

## Install

```bash
npm install find-chrome-version
```

## Usage

```js
const findChromeVersion = require("find-chrome-version")

const example = async () => {
  const chromeVersion = await findChromeVersion()
  console.log(`Your Chrome version is ${chromeVersion}`)
}
example()
```
