module.exports = {
	extends: [
		'@ky-is',
		'plugin:vue/recommended',
	],

	env: {
		browser: true,
	},

	rules: {
		'vue/attribute-hyphenation': 'off',
		'vue/attributes-order': 'off',
		'vue/html-indent': 'off',
		'vue/max-attributes-per-line': ['error', {
			singleline: 999,
			multiline: 0,
		}],
		'vue/require-default-prop': 'off',
	},
}
