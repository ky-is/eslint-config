module.exports = {
	extends: [
		'@ky-is',
		'plugin:vue/recommended',
	],

	env: {
		browser: true,
	},

	rules: {
		'vue/attribute-hyphenation': ['error', 'never'],
		'vue/component-name-in-template-casing': ['error', 'PascalCase', {
			ignores: [
				'v-separate',
			],
		}],
		'vue/html-indent': 'off',
		'vue/max-attributes-per-line': 'off',
		'vue/no-spaces-around-equal-signs-in-attribute': 'error',
		'vue/no-v-html': 'off',
		'vue/script-indent': ['error', 'tab'],
	},
}
