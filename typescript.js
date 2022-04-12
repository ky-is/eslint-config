// pnpm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser

module.exports = {
	extends: [
		'@ky-is',
		'plugin:@typescript-eslint/recommended',
	],
	parserOptions: {
		sourceType: 'module',
		project: 'tsconfig.eslint.json',
	},
	rules: {
		'@typescript-eslint/consistent-type-imports': ['warn', {
			prefer: 'type-imports',
			disallowTypeAnnotations: true,
		}],
		'indent': 'off',
		'@typescript-eslint/indent': ['warn', 'tab'],
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-inferrable-types': ['warn', {
			ignoreParameters: true,
		}],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'warn',
	},
}
