# Find chrome version

[![Build Status](https://dev.azure.com/ksathyanm/GitHub/_apis/build/status/ksathyanm.find-chrome-version?branchName=master)](https://dev.azure.com/ksathyanm/GitHub/_build/latest?definitionId=1&branchName=master)
[![NPM Version](https://img.shields.io/npm/v/find-chrome-version)](https://www.npmjs.com/package/find-chrome-version)
[![Node.js Version](https://img.shields.io/node/v/find-chrome-version)](https://nodejs.org/en/download/)
[![NPM Downloads](https://img.shields.io/npm/dw/find-chrome-version)](https://www.npmjs.com/package/find-chrome-version)
[![Known Vulnerabilities](https://snyk.io/test/npm/find-chrome-version/1.0.2/badge.svg)](https://snyk.io/test/npm/find-chrome-version/1.0.2)

Finds installed Chrome version.

## Install

```bash
npm install find-chrome-version
```

## Usage

```js
const findChromeVersion = require("find-chrome-version");

(async () => {
  const chromeVersion = await findChromeVersion();
  console.log(`Your Chrome version is ${chromeVersion}`);
})();
```

By default, this will return the Canary version if you installed both the stable version and the Canary version,
If you prefer the stable version, pass `{ stable: true }` to it.