import { createNamespace } from '../create'

export default {
    data() {
        return {
            cacheBem: new Map(),
        }
    },
    methods: {
        _getBem() {
            const block = this.$options.name
            if (this.cacheBem.has(block)) {
                return this.cacheBem.get(block)
            }
            const bem = createNamespace(block.toLowerCase())
            this.cacheBem.set(block, bem)
            return bem
        },
        bem(...args) {
            const bem = this._getBem()
            return bem(...args)
        },
    },
}
