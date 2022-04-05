// pnpm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser

module.exports = {
	extends: [
		'@ky-is',
	],

	rules: {
		'@typescript-eslint/consistent-type-imports': ['warn', {
			prefer: 'type-imports',
			disallowTypeAnnotations: true,
		}],
		'indent': 'off',
		'@typescript-eslint/indent': ['warn', 'tab'],
		'@typescript-eslint/strict-boolean-expressions': 'warn',
	},
}
