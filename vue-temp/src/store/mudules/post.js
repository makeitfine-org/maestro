export default {
    actions: {
        async fetchPosts({commit, getters, dispatch}, limit = 5) {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit='
                + limit)
            const posts = await res.json()
            this.posts = posts

            dispatch('sayHi')

            commit('updatePosts', posts)
        },
        sayHi() {
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost)
        }
    },
    state: {
        posts: []
    },
    getters: {
        validPosts: (state) => state.posts.filter(p => p.title && p.body),
        allPosts: (state) => state.posts,
        postsCount: (state, getters) => getters.validPosts.length
    },
}