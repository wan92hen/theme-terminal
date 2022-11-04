module.exports = {
    plugins: [
        require("postcss-url"),
        require("postcss-import"),
        require("postcss-mixins"),
        require("postcss-nested"),
        require("postcss-preset-env")({
            stage: 1,
            preserve: true,
            features: {
                "custom-properties": true,
                "nesting-rules": true,

            },
        }),
        require("cssnano"),
        require("postcss-color-mod-function"),
        require("autoprefixer"),
    ],
}