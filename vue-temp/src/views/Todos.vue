<template>
  <div>
    <h2>Todo app (play with Vue.js)</h2>
    <router-link to="/">Home</router-link>
    <hr>
    <AddTodo @add-todo="addTodo"/>
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
    <hr>
    <Loading v-if="loading"/>
    <TodoList v-else-if="filteredTodos.length"
              :todos="filteredTodos"
              @rm-todo="rmTodo"/>
    <div v-else>No todos</div>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from "@/components/AddTodo"
import Loading from "@/components/Loading"

export default {
  name: 'app',
  data: () => ({
    todos: [
      // {id: 1, title: 'some item 1', completed: false},
      // {id: 2, title: 'some item 222', completed: false},
      // {id: 3, title: 'some item 3', completed: false},
    ],
    loading: true,
    filter: 'all'
  }),
  components: {
    Loading,
    AddTodo,
    TodoList
  },
  // watch: {
  //   filter(value) {
  //     console.log(value)
  //   }
  // },
  computed: {
    filteredTodos() {
      switch (this.filter) {
        case 'completed':
          return this.todos.filter(e => e.completed)
        case 'not-completed':
          return this.todos.filter(e => !e.completed)
        default:
          return this.todos
      }
    }
  },
  methods: {
    rmTodo(id) {
      const rmIdx = this.todos.findIndex(e => e.id === id)
      this.todos.splice(rmIdx, 1)
    },
    addTodo(newTodo) {
      this.todos.unshift(newTodo)
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(res => res.json())
        .then(json => setTimeout(() => {
          this.todos = json
          this.loading = false
        }, 1000))
  }
}
</script>
