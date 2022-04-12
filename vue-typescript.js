// pnpm i -D vue-eslint-parser @typescript-eslint/eslint-plugin @typescript-eslint/parser

module.exports = {
	extends: [
		'@ky-is/eslint-config/typescript',
		'@ky-is/eslint-config/vue',
	],
	parserOptions: {
		extraFileExtensions: ['.vue'],
		parser: '@typescript-eslint/parser',
	},
	rules: {
		'no-unused-vars': 'off',
	},
}
