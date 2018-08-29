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
		'vue/attributes-order': 'off',
		// 'vue/component-name-in-template-casing': ['error', 'PascalCase', {
		// 	ignores: [
		// 		'v-separate',
		// 	],
		// }],
		'vue/html-indent': 'off',
		'vue/max-attributes-per-line': ['error', {
			singleline: 999,
			multiline: 0,
		}],
		// 'vue/no-spaces-around-equal-signs-in-attribute': 'error',
		'vue/script-indent': ['error', 'tab'],
		// 'vue/singleline-html-element-content-newline': ['error', {
		// 	ignoreWhenNoAttributes: true,
		// }],
	},
}
