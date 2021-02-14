const { NO_UNUSED_VARS } = require('./rules.js')

module.exports = {
	root: true,

	extends: 'eslint:recommended',

	ignorePatterns: [
		'dist/',
		'~$dist/',
	],

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
		'arrow-spacing': 'warn',
		'comma-dangle': ['warn', 'always-multiline'],
		'comma-spacing': 'error',
		'computed-property-spacing': 'warn',
		'curly': 'warn',
		'indent': ['warn', 'tab'],
		'keyword-spacing': 'warn',
		'multiline-ternary': ['warn', 'always-multiline'],
		'no-confusing-arrow': ['error', {
			allowParens: true,
		}],
		'no-console': 'off',
		'no-multiple-empty-lines': ['warn', {
			max: 1,
			maxBOF: 0,
			maxEOF: 1,
		}],
		'no-plusplus': 'error',
		'no-unreachable': 'warn',
		'no-unused-vars': ['warn', NO_UNUSED_VARS],
		'no-use-before-define': ['error', {
			functions: false,
			classes: true,
		}],
		'no-var': 'warn',
		'prefer-const': ['warn', {
			destructuring: 'all',
		}],
		'semi': ['warn', 'never'],
		'semi-spacing': 'warn',
		'space-before-blocks': 'warn',
		'space-before-function-paren': ['warn', {
			anonymous: 'always',
			named: 'always',
			asyncArrow: 'always',
		}],
		'space-infix-ops': 'warn',
		'space-in-parens': 'warn',
		'space-unary-ops': ['warn', {
			words: true,
			nonwords: false,
			overrides: {},
		}],
	},
}
