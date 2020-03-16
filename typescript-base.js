const { NO_UNUSED_VARS } = require('rules.js')

module.exports = {
	extends: [
		'@ky-is',
	],

	rules: {
		'no-undef': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['warn', NO_UNUSED_VARS],
	},
}
