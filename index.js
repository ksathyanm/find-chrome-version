const execa = require("execa")
const { Launcher } = require("chrome-launcher")

const regExp = /\d+\.\d+\.\d+\.\d+/

module.exports = async (options = {}) => {
  const { stable } = options
  const installs = Launcher.getInstallations()
  const chrome = stable ? installs.find((item) => {
    if (item.indexOf("stable") > 0) {
      return true
    }
    // Skip canary version, chromium and chrome-wrapper
    if (/canary|sxs|chromium|wrapper/i.test(item)) {
      return false
    }
    return true
  }) : installs[0]

  if (!chrome) {
    throw new Error("Chrome installation not found")
  }

  let result
  // Windows
  if (process.platform === "win32") {
    result = await execa("wmic", [
      "datafile",
      "where",
      `name="${chrome.replace(/\\/g, "\\\\")}"`,
      "get",
      "Version",
      "/value",
    ])
  } else {
    result = await execa(chrome, ["--version"])
  }
  return result.stdout.match(regExp)[0]
}
