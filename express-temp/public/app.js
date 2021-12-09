App = {
    data: () => ({
        servers: [],
        name: ''
    }),
    methods: {
        async createServer() {
            const data = {
                name: this.name,
                status: 'created'
            }
            const res = await fetch('/api/server', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            this.name = ''
            const newServer = await res.json()
            this.servers.push(newServer)
        },
        async remove(id) {
            const res = await fetch(`/api/server/${id}`, {
                method: 'DELETE'
            })
            console.log((await res.json()).message)
            this.servers.splice(this.servers.findIndex(e => e.id === id), 1)
        }
    },
    async mounted() {
        const res = await fetch('/api/server')
        this.servers = await res.json()
    }
}

Vue.createApp(App).mount('#app')