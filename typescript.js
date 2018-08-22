module.exports = {
	extends: [
		'@ky-is',
	],

	parser: 'typescript-eslint-parser',
	parserOptions: {
		sourceType: 'module',
	},

	plugins: [
		'typescript',
	],

	rules: {
		'no-undef': 'off',
		'typescript/no-unused-vars': 'error',
	},
}
