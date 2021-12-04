const app = {
    data: () => ({
        title: 'Play with Vue.js title',
        customHtml: '<h1>customHtml</h1>',
        customObject: {
            first: 125,
            second: 'This is second prop',
            third: -32.33
        },
        items: [1, 2, 3, 4, 5, 6, 7]
    }),
    methods: {
        stopPropagation(event) {
            event.stopPropagation()
        },
        addItem(event) {
            // console.log(this.$refs.newInput.value)
            let newInput = this.$refs.newInput.value
            const k = event.key
            this.items.unshift(
                k === 'ArrowUp'
                    ? newInput.toUpperCase()
                    : (k === 'ArrowDown'
                        ? newInput.toLowerCase()
                        : newInput)
            )
            console.log(event.key)
        },
        remove(i) {
            this.items.splice(i, 1)
        },
        removeLog(item) {
            console.log('item:', item)
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(e => e % 2 === 0)
        }
    }
}

Vue.createApp(app).mount('#app')
