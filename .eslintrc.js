module.exports = {
  quotes: ['error', 'double'],
  extends: ['plugin:prettier/recommended'],
  rules: {
        'no-console': 'off', // console.logがあってもエラーにしない
        'require-jsdoc': 'off', // Docコメントなくてもエラーにしない
        'valid-jsdoc': 'off', // Docコメントの書き方についてとやかくいわせない
        camelcase: ['warn', { properties: 'never' }], // オブジェクトのキーはキャメルじゃなくてよい
  },
};