module.exports = {
	extends: [
		'eslint:recommended',
	],

	env: {
		node: true,
	},

	parserOptions: {
		ecmaVersion: 2017,
	},

	rules: {
		'comma-dangle': ['error', 'always-multiline'],
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
		'no-var': 'error',
	},
}
