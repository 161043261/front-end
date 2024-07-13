module.exports = {
    parser: '@typescript-eslint/parser', plugins: ['@typescript-eslint'], rules: {
        // prefer let, const to var
        'no-var': "error", // prefer interface to type
        '@typescript-eslint/consistent-type-definitions': ["error", "interface"]
    }
}
