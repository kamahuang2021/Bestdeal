module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jquery": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": ["error", 2],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
    }
};
