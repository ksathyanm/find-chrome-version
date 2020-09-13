# Find chrome version

![Test windows status](https://github.com/ksathyanm/find-chrome-version/workflows/test-windows/badge.svg)
![Test macOS status](https://github.com/ksathyanm/find-chrome-version/workflows/test-macOS/badge.svg)
![Test linux status](https://github.com/ksathyanm/find-chrome-version/workflows/test-linux/badge.svg)

[![npm version](https://badge.fury.io/js/find-chrome-version.svg)](https://badge.fury.io/js/find-chrome-version)
[![Node.js version](https://img.shields.io/node/v/find-chrome-version)](https://nodejs.org/en/download/)
[![npm downloads](https://img.shields.io/npm/dm/find-chrome-version)](https://www.npmjs.com/package/find-chrome-version)
[![Minified size](https://img.shields.io/bundlephobia/min/find-chrome-version)](https://bundlephobia.com/result?p=find-chrome-version)
[![Known vulnerabilities](https://snyk.io/test/npm/find-chrome-version/badge.svg)](https://snyk.io/test/npm/find-chrome-version)

> Finds installed Chrome version.

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
