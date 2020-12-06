module.exports = {
	extends: [
		'@ky-is',
		'plugin:vue/recommended',
	],

	env: {
		browser: true,
	},

	rules: {
		'vue/attribute-hyphenation': ['warn', 'never'],
		'vue/attributes-order': ['warn', {
			order: [
				'CONDITIONALS',
				'DEFINITION',
				'LIST_RENDERING',
				'RENDER_MODIFIERS',
				'GLOBAL',
				'UNIQUE',
				'TWO_WAY_BINDING',
				'OTHER_DIRECTIVES',
				'OTHER_ATTR',
				'EVENTS',
				'CONTENT',
			],
		}],
		'vue/component-name-in-template-casing': ['warn', 'PascalCase', {
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
		'vue/no-spaces-around-equal-signs-in-attribute': 'warn',
		'vue/no-v-html': 'off',
		'vue/script-indent': ['error', 'tab'],
		'vue/singleline-html-element-content-newline': 'off',
	},
}
