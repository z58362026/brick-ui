const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const less = require('gulp-less')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
// const postCSS = require('gulp-postcss')

const { getStyles } = require('./common/utils')

const entrys = getStyles('packages')

function buildHomeCss(cb) {
    const sources = Object.values(entrys).map((entry) => `${entry}/index.less`)
    gulp.src(sources)
        .pipe(concat('index.less'))
        .pipe(less())
        // .pipe(postCSS())
        .pipe(cleanCSS())
        .pipe(rename('index.css'))
        .pipe(gulp.dest('../lib'))
    cb()
}

function buildSeperateCss(cb) {
    Object.keys(entrys).forEach((compName) => {
        const path = entrys[compName]
        gulp.src(`${path}/index.less`)
            .pipe(less())
            // .pipe(postCSS())
            .pipe(cleanCSS())
            .pipe(rename(`${compName}.css`))
            .pipe(gulp.dest('../lib/styles'))
    })
    cb()
}

// 模版样式
// const templateEntrys = getStyles('src/template')

// function buildTemplateCss(cb) {
//     Object.keys(templateEntrys).forEach((compName) => {
//         const path = templateEntrys[compName]
//         gulp.src(`${path}/index.less`)
//             .pipe(less())
//             // .pipe(postCSS())
//             .pipe(cleanCSS())
//             .pipe(rename(`${compName}.css`))
//             .pipe(gulp.dest('../lib/template/styles'))
//     })
//     cb()
// }

gulp.task('build-story', buildHomeCss)

gulp.task('default', gulp.series(buildHomeCss, buildSeperateCss))
