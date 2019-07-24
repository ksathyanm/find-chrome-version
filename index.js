const ChromeLauncher = require("chrome-launcher")
const CDP = require("chrome-remote-interface")

const chromeFlags = [
  "--no-sandbox",
  "--headless",
]

const regExp = /HeadlessChrome\/(.*)/

module.exports = async () => {
  const chrome = await ChromeLauncher.launch({ chromeFlags })
  const protocol = await CDP({ port: chrome.port })
  const { product } = await protocol.Browser.getVersion()
  protocol.close()
  chrome.kill()
  return regExp.exec(product)[1]
}
