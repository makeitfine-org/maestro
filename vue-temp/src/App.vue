<template>
  <div id="app">
    <PostForm/>
    <hr>
    <h2>Post count: {{ postsCount }}</h2>
    <div class="post" v-for="post in validPosts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import PostForm from "@/components/PostForm"

export default {
  name: 'app',
  components: {PostForm},
  computed: mapGetters(['validPosts', 'allPosts', 'postsCount']),
  methods: mapActions(['fetchPosts']),
  async mounted() {
    // this.$store.dispatch('fetchPosts')
    this.fetchPosts()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post {
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
