module.exports = {
	extends: [
		'@ky-is',
		'plugin:vue/vue3',
	],

	env: {
		browser: true,
	},

	rules: {
		'vue/attribute-hyphenation': ['error', 'never'],
		'vue/component-name-in-template-casing': ['error', 'PascalCase'],
		'vue/html-indent': ['error', type, {
			baseIndent: 0,
			alignAttributesVertically: false,
		}],
		'vue/max-attributes-per-line': 'off',
		'vue/multiline-html-element-content-newline': 'off',
		'vue/script-indent': ['error', 'tab'],
		'vue/singleline-html-element-content-newline': 'off',
	},
}
