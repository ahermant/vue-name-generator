
module.exports = {
    plugins: {
        vue: {
            css: true,
            postcss: true
        },
        copy: {
            targets: [
                { src: 'src/assets', dest: 'dist' }
            ]
        },
        "@rollup/plugin-url": true
    }
};