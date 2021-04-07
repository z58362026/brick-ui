const path = require('path')

module.exports = async ({ config }) => {
    config.module.rules.push({
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        include: path.resolve(__dirname, '../packages'),
        exclude: path.resolve(__dirname, '../node_modules'),
    })
    return config
}
