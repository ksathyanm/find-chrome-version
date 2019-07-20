# Find chrome version

[![Build Status](https://dev.azure.com/ksathyanm/GitHub/_apis/build/status/ksathyanm.find-chrome-version?branchName=master)](https://dev.azure.com/ksathyanm/GitHub/_build/latest?definitionId=1&branchName=master)

Finds installed Chrome version.

## Install

```bash
$ npm install find-chrome-version
```

## Usage

```js
const findChromeVersion = require("find-chrome-version");

(async () => {
  await chromeVersion = await findChromeVersion();
  console.log(`Your Chrome version is ${chromeVersion}`)
})();
```
