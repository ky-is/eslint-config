module.exports = {
	extends: [
		'@ky-is',
		'plugin:vue/vue3-recommended',
	],

	env: {
		browser: true,
	},

	rules: {
		'vue/attribute-hyphenation': ['error', 'never'],
		'vue/component-name-in-template-casing': ['error', 'PascalCase'],
		'vue/component-tags-order': ['error', {
			order: ['template', 'script', 'style'],
		}],
		'vue/html-indent': ['warn', 'tab', {
			alignAttributesVertically: false,
		}],
		'vue/max-attributes-per-line': 'off',
		'vue/multiline-html-element-content-newline': 'off',
		'vue/script-indent': ['warn', 'tab'],
		'vue/singleline-html-element-content-newline': 'off',
	},
}
