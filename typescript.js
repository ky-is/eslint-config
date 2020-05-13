module.exports = {
	extends: [
		'@ky-is/eslint-config',
	],

	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
	},

	plugins: [
		'@typescript-eslint',
	],
}
