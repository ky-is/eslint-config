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
		'comma-spacing': 'warn',
		'computed-property-spacing': 'warn',
		'curly': ['error', 'multi-line', 'consistent'],
		'indent': ['warn', 'tab'],
		'keyword-spacing': 'warn',
		'multiline-ternary': ['warn', 'always-multiline'],
		'no-confusing-arrow': ['error', {
			onlyOneSimpleParam: true,
		}],
		'no-console': 'off',
		'no-empty': 'warn',
		'no-multi-spaces': ['warn', {
			exceptions: {
				'Property': false,
			},
		}],
		'no-multiple-empty-lines': ['warn', {
			max: 1,
			maxBOF: 0,
			maxEOF: 1,
		}],
		'no-unused-vars': ['warn', {
			varsIgnorePattern: '^_',
			args: 'none',
		}],
		'no-plusplus': 'error',
		'no-use-before-define': ['warn', {
			functions: false,
			classes: false,
			variables: true,
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
			named: 'never',
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
