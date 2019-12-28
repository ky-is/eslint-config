module.exports = {
	extends: [
		'@ky-is/eslint-config/typescript-base',
	],

	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
	},

	plugins: [
		'@typescript-eslint',
	],
}
