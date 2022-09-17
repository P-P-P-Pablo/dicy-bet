import { defineStore } from "pinia";
import type Todo from "@/types/Todo";

export const useTodos = defineStore("todos", {
  state: () => ({
    todos: [] as Todo[],
    filter: "all" as "all" | "finished" | "unfinished",
    // type will be automatically inferred to number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // autocompletion! ✨
      return state.todos.filter((todo) => todo.isFinished);
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished);
    },
    /**
     * @returns {Todo[]}
     */
    filteredTodos(state): Todo[] {
      if (this.filter === "finished") {
        // call other getters with autocompletion ✨
        return this.finishedTodos;
      } else if (this.filter === "unfinished") {
        return this.unfinishedTodos;
      }
      return this.todos;
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addTodo(text: string) {
      // you can directly mutate the state
      this.todos.push({ text, id: this.nextId++, isFinished: false });
    },
    checkTodo(id: number) {
      this.todos.map((todo) => {
        if (todo.id === id) {
          todo.isFinished = !todo.isFinished;
        }
      });
    },
  },
});
