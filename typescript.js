module.exports = {
	extends: [
		'@ky-is',
	],

	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
	},

	plugins: [
		'@typescript-eslint',
	],

	rules: {
		'no-undef': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['warn', {
			varsIgnorePattern: '^_',
			args: 'none',
		}],
	},
}
