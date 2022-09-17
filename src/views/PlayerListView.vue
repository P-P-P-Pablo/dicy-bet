<template>
  <div class="player-list">
    <h1>This is the player list Page</h1>

    <form @submit.prevent="todoStore.addTodo(name)">
      <label for="name">name:</label>
      <input type="text" id="name" name="name" v-model="name" />
      <input type="submit" />
    </form>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">
        <TodoItem>
          <template #heading>{{ todo.text }}</template>
          <input type="checkbox" id="test" name="test" v-model="todo.isFinished" @click="check(todo.id)" />
          {{ todo.id+" "+todo.isFinished}}
        </TodoItem>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import TodoItem from "@/components/TodoItem.vue";
import { useTodos } from "@/stores/todos";

const todoStore = useTodos();

const todoList = todoStore.todos;
let name: string;

function check(id: number) {
  console.log(id)
  todoStore.checkTodo(id)
}
</script>
