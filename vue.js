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
				'component',
				'keep-alive',
				'router-link',
				'router-view',
				'transition',
				'transition-group',
				'v-separate',
			],
		}],
		'vue/html-indent': 'off',
		'vue/max-attributes-per-line': 'off',
		'vue/multiline-html-element-content-newline': 'off',
		'vue/no-spaces-around-equal-signs-in-attribute': 'error',
		'vue/no-v-html': 'off',
		'vue/script-indent': ['error', 'tab'],
		'vue/singleline-html-element-content-newline': 'off',
	},
}
