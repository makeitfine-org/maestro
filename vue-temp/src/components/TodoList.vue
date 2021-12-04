<template>
  <div>
    <ul>
      <TodoItem v-for="(todo, idx) in todos"
                :todo="todo"
                :idx="idx"
                v-on:rm-todo="rmTodo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem"

export default {
  props: ['todos'],
  components: {
    TodoItem
  },
  methods: {
    rmTodo(id) {
      this.$emit('rm-todo', id)
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
