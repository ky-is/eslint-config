module.exports = {
	extends: [
		'@ky-is/eslint-config/vue',
		'@ky-is/eslint-config/typescript-base',
		'@vue/typescript',
	],

	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
}
