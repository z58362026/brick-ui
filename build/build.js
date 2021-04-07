const webpack = require('webpack')
const gen_package_entry = require('./compiler/gen-package-entry')
const path = require('path')
const gulp = require('gulp')
const constant = require('./common/constant.js')

// 创建总入口
function createHomeEntry(cb) {
    gen_package_entry.genPackageEntry({
        outputPath: path.join(constant.HOME_DIR, '/index.js'),
    })
    cb()
}
// 打包ui组件任务
function webpackTask(cb) {
    const webpackConf = require('./webpack.components')
    webpack(webpackConf, (error) => {
        if (error) {
            cb(error)
            return
        }
        cb()
    })
}
// 打包模版组件
function webpackTemplateTask(cb) {
    const webpackConf = require('./webpack.template')
    webpack(webpackConf, (error) => {
        if (error) {
            cb(error)
            return
        }
        console.log(error)
        cb()
    })
}

gulp.task(
    'default',
    gulp.series(createHomeEntry, webpackTask, webpackTemplateTask),
)
