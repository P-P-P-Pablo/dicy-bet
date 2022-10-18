import { defineStore } from "pinia";
import type Player from "@/types/Player";

export const usePlayers = defineStore("players", {
  state: () => ({
    players: [] as Player[],
    filter: "all" as "all" | "in-game" | "out-of-game",
    // type will be automatically inferred to number
  }),
  getters: {
    inGamePlayers(state) {
      // autocompletion! ✨
      return state.players.filter((player) => player.inGame);
    },
    outOfGamePlayers(state) {
      return state.players.filter((player) => !player.inGame);
    },
    /**
     * @returns {Player[]}
     */
    filteredPlayers(state): Player[] {
      if (state.filter === "in-game") {
        // call other getters with autocompletion ✨
        return this.inGamePlayers;
      } else if (state.filter === "out-of-game") {
        return this.outOfGamePlayers;
      }
      return state.players;
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addPlayer(player: Player) {
      // you can directly mutate the state
      this.players.push(player);
    },
    checkInPlayer(id: number) {
      this.players.map((player) => {
        if (player.id === id && !player.inGame) {
          player.inGame = true;
        }
      });
      console.log(this.players);
    },
    checkOutPlayer(id: number) {
      this.players.map((player) => {
        if (player.id === id && player.inGame) {
          player.inGame = false;
        }
      });
      console.log(this.players);
    },
  },
});
