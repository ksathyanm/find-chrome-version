const http = require("http")
const util = require("util")
const ChromeLauncher = require("chrome-launcher")

const chromeFlags = [
  "--no-sandbox",
  "--headless",
]

const regExp = /HeadlessChrome\/(.*)/

const REQUEST_TIMEOUT = 10000

const getRequestAsync = util.promisify((options, callback) => {
  const request = http.get(options, (response) => {
    let data = ""
    response.on("data", (chunk) => {
      data += chunk
    })
    response.on("end", () => {
      if (response.statusCode === 200) {
        callback(null, JSON.parse(data))
      } else {
        callback(new Error(data))
      }
    })
  })
  request.setTimeout(REQUEST_TIMEOUT, () => {
    request.abort()
  })
  request.on("error", callback)
})

module.exports = async () => {
  const chrome = await ChromeLauncher.launch({ chromeFlags })
  const options = {
    host: "127.0.0.1",
    port: chrome.port,
    path: "/json/version",
  }
  const version = await getRequestAsync(options)
  chrome.kill()
  return regExp.exec(version.Browser)[1]
}
