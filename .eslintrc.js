module.exports = {
    'env': {
      'browser': true,
      'es2021': true,
      'node': true
    },
    'ignorePatterns': ["dist", ".eslintrc.js"],
    'extends': 'airbnb-base',
    'overrides': [],
    'parserOptions': {
      'ecmaVersion': 'latest',
      'sourceType': 'module'
    },
    'rules': {
      "linebreak-style": 0,
      "no-console": "off",
    }
  }