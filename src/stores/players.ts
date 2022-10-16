import { defineStore } from "pinia";
import type Player from "@/types/Player";

export const usePlayers = defineStore("players", {
  state: () => ({
    players: [] as Player[],
    filter: "all" as "all" | "in-game" | "out-of-game",
    // type will be automatically inferred to number
    nextId: 0,
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
      if (this.filter === "in-game") {
        // call other getters with autocompletion ✨
        return this.inGamePlayers;
      } else if (this.filter === "out-of-game") {
        return this.outOfGamePlayers;
      }
      return this.players;
    },
    maxID(state): number {
      return this.nextId + 1;
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addPlayer(player: Player) {
      // you can directly mutate the state
      this.players.push(player);
      console.log(this.players);
    },
    checkInPlayer(id: number) {
      this.players.map((player) => {
        if (player.id === id && !player.inGame) {
          player.inGame = true;
        }
      });
    },
    checkOutPlayer(id: number) {
      this.players.map((player) => {
        if (player.id === id && player.inGame) {
          player.inGame = false;
        }
      });
    },
  },
});
