module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-trailing-spaces': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'eol-last': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-components': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-var': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/valid-v-on': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  }
}
