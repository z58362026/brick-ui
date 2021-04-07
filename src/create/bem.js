export function gen(name, mods) {
    if (!mods) {
        return ''
    }
    if (typeof mods === 'string') {
        return ` ${name}--${mods}`
    }
    if (Array.isArray(mods)) {
        return mods.reduce((ret, item) => ret + gen(name, item), '')
    }
    return Object.keys(mods).reduce(
        (ret, key) => ret + (mods[key] ? gen(name, key) : ''),
        '',
    )
}

export function createBEM(name) {
    return function (el, mods) {
        console.log('mods: ', mods)
        console.log('el: ', el)
        if (el && typeof el !== 'string') {
            mods = el
            el = ''
        }

        el = el ? `${name}__${el}` : name

        return `${el}${gen(el, mods)}`
    }
}

export default {
    createBEM,
}
