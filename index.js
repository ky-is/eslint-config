const { NO_UNUSED_VARS } = require('./rules.js')

module.exports = {
	root: true,

	extends: 'eslint:recommended',

	env: {
		node: true,
	},

	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			impliedStrict: true,
			jsx: false,
		},
	},

	rules: {
		'arrow-spacing': 'error',
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': 'error',
		'computed-property-spacing': 'error',
		'curly': 'error',
		'indent': ['error', 'tab'],
		'keyword-spacing': 'error',
		'multiline-ternary': ['error', 'always-multiline'],
		'no-confusing-arrow': ['error', {
			allowParens: true,
		}],
		'no-console': 'off',
		'no-multiple-empty-lines': ['error', {
			max: 1,
			maxBOF: 0,
			maxEOF: 1,
		}],
		'no-unused-vars': ['warn', NO_UNUSED_VARS],
		'no-plusplus': 'error',
		'no-use-before-define': ['error', {
			functions: false,
			classes: true,
		}],
		'no-var': 'error',
		'prefer-const': ['error', {
			destructuring: 'all',
		}],
		'semi': ['error', 'never'],
		'semi-spacing': 'error',
		'space-before-blocks': 'error',
		'space-before-function-paren': ['error', {
			anonymous: 'always',
			named: 'always',
			asyncArrow: 'always',
		}],
		'space-infix-ops': 'error',
		'space-in-parens': 'error',
		'space-unary-ops': ['error', {
			words: true,
			nonwords: false,
			overrides: {},
		}],
	},
}
