const { varsIgnorePattern } = require('./rules.js')

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
		'vue/no-unused-vars': ['warn', {
			ignorePattern: varsIgnorePattern,
		}],
		'vue/script-indent': ['warn', 'tab'],
		'vue/singleline-html-element-content-newline': 'off',
		// 'vue/v-for-delimiter-style': 'of',
		'vue/v-slot-style': ['warn', 'shorthand'],
	},

	overrides: [
		{ // HACK: https://github.com/vuejs/eslint-plugin-vue/issues/1355
			files: ['*.html'],
			rules: { 'vue/comment-directive': 'off' },
		},
		{
			files: ['*.vue'],
			rules: {
				'no-unused-vars': 'off',
			},
		},
	],
}
