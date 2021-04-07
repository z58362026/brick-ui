const path = require('path')
const fs_extra = require('fs-extra')

function findRootDir(dir) {
    if (dir === '/') {
        return '/'
    }
    if (fs_extra.existsSync(path.join(dir, 'package.json'))) {
        return dir
    }
    return findRootDir(path.dirname(dir))
}

exports.CWD = process.cwd()

exports.ROOT = findRootDir(exports.CWD)

exports.LIB_DIR = path.join(exports.ROOT, 'lib')

exports.COMP_DIR = path.join(exports.ROOT, 'packages')

exports.HOME_DIR = path.join(exports.ROOT, 'src')

exports.STYLE_DIR = path.join(exports.ROOT, 'lib/styles')
