/* eslint-env mocha */
const { expect } = require("chai")
const findChromeVersion = require("./index.js")

describe("find chrome version", () => {
  it("finds chrome version", async () => {
    try {
      const chromeVersion = await findChromeVersion()
      console.log(chromeVersion)
      expect(chromeVersion).to.exist
      expect(chromeVersion).to.not.be.empty
      expect(chromeVersion).to.be.a("string")
      expect(chromeVersion).to.match(/^\d+.\d+.\d+.\d+$/)
    } catch (error) {
      console.log(error)
      throw error
    }
  })
})
