module.exports = {
	extends: [
		'@ky-is',
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
