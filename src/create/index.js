import { createBEM } from './bem'

export function createNamespace(name) {
    name = 'boss-' + name
    return createBEM(name)
}
