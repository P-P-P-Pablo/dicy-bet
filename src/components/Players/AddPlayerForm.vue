<script setup lang="ts">
import { usePlayers } from "@/stores/players";
import type Player from "@/types/Player";

const playerStore = usePlayers();

let newPlayer: Player = {
  id: playerStore.maxID,
  name: "",
  type: undefined,
  stats: {
    pv: 0,
    strength: 0,
    stamina: 0,
    magic: 0,
    spirit: 0,
    speed: 0,
  },
  currentDrachmas: 0,
  totalDrachmas: 0, // currentDrachmas+spendDrachmas
  inGame: false,
};

let typeList: string[] = [
  "Guerre",
  "Sagesse",
  "Liberté",
  "Souverain",
  "Mort",
  "Forge",
  "Péché",
  "Marin",
  "Union",
  "Sacre",
  "Chasse",
  "Art",
  "Passion",
  "Nature",
];

function setNewPlayer(newPlayer: Player) {
  // set default value
  newPlayer.id = 0;
  newPlayer.inGame = false;
  playerStore.addPlayer(newPlayer);
}
</script>

<template>
  <form class="new-player-form" @submit.prevent="setNewPlayer(newPlayer)">
    <div class="identity block">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" v-model="newPlayer.name" />
      </div>
      <div>
        <label for="type">Type:</label>
        <select v-model="newPlayer.type">
          <option disabled value="">Please select one</option>
          <option :key="type" :value="type" v-for="type in typeList">
            {{ type }}
          </option>
        </select>
      </div>
    </div>
    <div class="stats block">
      <div>
        <label for="pv">PV:</label>
        <input type="number" id="pv" name="pv" v-model="newPlayer.stats.pv" />
      </div>
      <div>
        <label for="strength">Strength:</label>
        <input type="number" id="strength" name="strength" v-model="newPlayer.stats.strength" />
      </div>
      <div>
        <label for="stamina">Stamina:</label>
        <input type="number" id="stamina" name="stamina" v-model="newPlayer.stats.stamina" />
      </div>
      <div>
        <label for="magic">Magic:</label>
        <input type="number" id="magic" name="magic" v-model="newPlayer.stats.magic" />
      </div>
      <div>
        <label for="spirit">Spirit:</label>
        <input type="number" id="spirit" name="spirit" v-model="newPlayer.stats.spirit" />
      </div>
      <div>
        <label for="speed">Speed:</label>
        <input type="number" id="speed" name="speed" v-model="newPlayer.stats.speed" />
      </div>
    </div>
    <div class="drachmas block">
      <div>
        <label for="currentDrachmas">Current Drachmas:</label>
        <input type="number" id="currentDrachmas" name="currentDrachmas" v-model="newPlayer.currentDrachmas" />
      </div>
      <div>
        <label for="totalDrachmas">Total Drachmas:</label>
        <input type="number" id="totalDrachmas" name="totalDrachmas" v-model="newPlayer.totalDrachmas" />
      </div>
    </div>
    <input type="submit" />
  </form>
</template>

<style scoped>
.new-player-form {
  margin-left: 1rem;
  display: flex;
  flex-flow: row nowrap;
  height: 100px;
  width: 50%
}

input[type="number"] {
  max-width: 50px;
}

.block {
  margin: 2px 4px;
  padding: 4px;
  height: 100%;
  width: 100%;
}

.stats {
  display: flex;
  flex-flow: column wrap;
}

.drachmas {
  font-size: 0.6rem;
}
</style>
