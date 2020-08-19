const ChromeLauncher = require("chrome-launcher")
const CDP = require("chrome-remote-interface")

const chromeFlags = [
  "--no-sandbox",
  "--headless",
]

const regExp = /HeadlessChrome\/(.*)/

module.exports = async () => {
  const chrome = await ChromeLauncher.launch({ chromeFlags })
  const version = await CDP.Version({ port: chrome.port })
  chrome.kill()
  return regExp.exec(version.Browser)[1]
}
