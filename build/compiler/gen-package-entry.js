const utils = require('../common/utils')
const fs_extra = require('fs-extra')
const path = require('path')
const contant = require('../common/constant')

function smartOutputFile(filePath, content) {
    if (fs_extra.existsSync(filePath)) {
        const previousContent = fs_extra.readFileSync(filePath, 'utf-8')
        if (previousContent === content) {
            return
        }
    }
    fs_extra.outputFileSync(filePath, content)
}

function pathRelative(path_1) {
    const homePath = path.join(contant.HOME_DIR, 'index.js')
    return path.relative(homePath, path_1).replace(/\.\.\//g, '')
}

function genImports(components) {
    return Object.keys(components)
        .map((name) => {
            const path_1 = components[name]
            return `import ${name} from '../${pathRelative(path_1)}'`
        })
        .join('\n')
}

function genExports(names) {
    return names.map((name) => `${name}`).join(',\n    ')
}
// 获取index.js入口
function genPackageEntry(options) {
    const components = utils.getEntries('packages', {
        filter: (name) => !/^Temp/.test(name),
    })
    const namesArr = Object.keys(components)
    const content = `${genImports(components)}

const components = {
    ${genExports(namesArr)}
}

function install(Vue) {
    Object.values(components).forEach(component => {
        if (component.install) {
            Vue.use(component)
        } else if (component.name) {
            Vue.component('Boss' + component.name, component)
        }
    })
}

export const exportObject = { install, ...components }

export default { install, ...components }
`
    smartOutputFile(options.outputPath, content)
}
exports.genPackageEntry = genPackageEntry
