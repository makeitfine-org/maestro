<template>
  <li>
    <span :class="{done: todo.completed}">
      <input type="checkbox" v-on:change="todo.completed = !todo.completed">
      <strong>{{ idx + 1 }}</strong>
      {{ uppercase }}
    </span>
    <button class="rm"
            v-on:click="$emit('rm-todo', todo.id)"
    >&times;
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    idx: Number
  },
  computed: {
    uppercase() {
      return this.todo.title.toUpperCase()
    }
  }
}
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: .5rem 2rem;
  margin-bottom: 1rem;
}

.rm {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
}

.done {
  text-decoration: line-through;
}

input {
  margin-right: 1rem;
}
</style>
