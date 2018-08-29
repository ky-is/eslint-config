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
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': 'error',
		'computed-property-spacing': 'error',
		'curly': 'error',
		'indent': ['error', 'tab'],
		'no-console': 'off',
		'no-multiple-empty-lines': ['error', {
			max: 1,
		}],
		'no-unused-vars': ['warn', {
			varsIgnorePattern: '^_',
			argsIgnorePattern: '^_',
		}],
		'keyword-spacing': 'error',
		'no-var': 'error',
		'semi': ['error', 'never'],
		'semi-spacing': 'error',
		'space-before-blocks': 'error',
		'space-before-function-paren': ['error', {
			'anonymous': 'always',
			'named': 'always',
			'asyncArrow': 'always',
		}],
		'space-infix-ops': 'error',
		'space-in-parens': 'error',
		'space-unary-ops': ['error', {
			'words': true,
			'nonwords': false,
			'overrides': {},
		}],
	},
}
