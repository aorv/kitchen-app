module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "comma-dangle" : "off",
        "import/no-unresolved" : "off",
        "import/prefer-default-export": "off",
        "object-curly-newline" : "off",
        "class-methods-use-this" : "off",
        "react/jsx-filename-extension": "off",
        "react/prop-types" : "off"
    }
};