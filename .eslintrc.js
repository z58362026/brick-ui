module.exports = {
    env: {
        amd: true,
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['plugin:prettier/recommended'],
    plugins: ['prettier'],
    parser: 'babel-eslint',
    rules: {
        'prettier/prettier': 'error',
    },
}
