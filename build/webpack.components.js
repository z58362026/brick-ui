const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const { getEntries } = require('./common/utils')
const constant = require('./common/constant')

process.env.NODE_ENV = 'production'

const entrys = getEntries('packages', {
    filter: (name) => !/^Temp/.test(name),
})

// const homeEntry = {
//     dependOn: Object.keys(entrys),
//     import: path.join(constant.HOME_DIR, 'index.js'),
// }

entrys['home'] = path.join(constant.HOME_DIR, 'index.js')

const config = merge(webpackBaseConfig, {
    mode: 'none',
    entry: entrys,
    output: {
        path: constant.LIB_DIR,
        filename: (path) => {
            if (path.chunk.name === 'home') {
                return 'index.umd.js'
            }
            return '[name]/index.js'
        },
        library: 'bossH5Ui',
        libraryExport: 'default',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue',
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
        }),
    ],
})

module.exports = config
