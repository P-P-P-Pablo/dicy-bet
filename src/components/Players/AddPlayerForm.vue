<script setup lang="ts">
import { useTodos } from "@/stores/todos";

const todoStore = useTodos();

let name: string;
</script>
    
<template>
    <form @submit.prevent="todoStore.addTodo(name)">
        <label for="name">name:</label>
        <input type="text" id="name" name="name" v-model="name" />
        <input type="submit" />
    </form>
</template>
    
<style scoped>

</style>
    