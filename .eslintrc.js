module.exports = {
	root: true,
	env: {
		browser: true,
		amd: true,
		node: true,
		es6: true,
	},
	extends: ["eslint:recommended", "plugin:jsx-a11y/recommended", "plugin:prettier/recommended", "react-app"],
	rules: {
		"semi": ["error", "always"], //prettier-ignore
		"prettier/prettier": 0,
		"jsx-a11y/click-events-have-key-events": 0,
		"jsx-a11y/no-noninteractive-element-interactions": 0,
		"jsx-a11y/no-static-element-interactions": 0,
		"react-hooks/exhaustive-deps": 0,
	},
};
