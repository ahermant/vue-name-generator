
module.exports = {
    banner: true,
    output: {
        extractCSS: false,
    },
    plugins: {
        vue: {
            css: true,
            postcss: true,
            "copy-assets": {
                assets: [
                    // You can include directories
                    "src/assets"
                ],
            }
        }
    }
};