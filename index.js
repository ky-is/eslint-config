module.exports = {
	root: true,

	extends: 'eslint:recommended',

	env: {
		node: true,
		es6: true,
	},

	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		ecmaFeatures: {
			impliedStrict: true,
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
		'no-confusing-arrow': ['error', {
			allowParens: true,
		}],
		'no-console': 'off',
		'no-multiple-empty-lines': ['error', {
			max: 1,
		}],
		'no-unused-vars': ['warn', {
			varsIgnorePattern: '^_',
			args: 'none',
		}],
		'no-plusplus': 'error',
		'no-var': 'error',
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
