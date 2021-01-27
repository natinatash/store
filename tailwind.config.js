// tailwind.config.js
module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"]
}