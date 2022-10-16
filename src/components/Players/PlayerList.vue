<script setup lang="ts">
import TodoItem from "@/components/TodoItem.vue";
import { useTodos } from "@/stores/todos";

const todoStore = useTodos();
const todoList = todoStore.todos;

function check(id: number) {
    console.log(id);
    todoStore.checkTodo(id);
}
</script>
    
<template>
    <div class="player-list">
        <ul>
            <li v-for="todo in todoList" :key="todo.id">
                <TodoItem>
                    <template #heading>{{ todo.text }}</template>
                    <input type="checkbox" id="test" name="test" v-model="todo.isFinished" @click="check(todo.id)" />
                    {{ todo.id + " " + todo.isFinished }}
                </TodoItem>
            </li>
        </ul>
    </div>
</template>
    
<style scoped>

</style>
    