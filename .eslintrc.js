module.exports = {
  "env": {
    "commonjs": true,
    "es6": true,
    "node": true,
  },
  "extends": [
    "google",
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
  },
  "rules": {
    "quotes": ["error", "double"],
    "max-len": ["error", { "code": 120 }],
    "new-cap": ["off"],
    "object-curly-spacing": ["error", "always"],
    "semi": ["error", "never"]
  },
}
