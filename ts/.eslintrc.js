// .eslintrc.js and .eslintrc.json are both right
module.exports = {
    parser: '@typescript-eslint/parser', plugins: ['@typescript-eslint'], rules: {
        "ban-ts-ignore": true,
        // prefer let, const to var
        'no-var': "error",
    }
}
