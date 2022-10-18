<script setup lang="ts">
import { usePlayers } from "@/stores/players";
import type Player from "@/types/Player";

const playerStore = usePlayers();

let newPlayer: Player = {
  id: 0,
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

function setNewPlayer(player: Player) {
  // set default value
  playerStore.addPlayer(player);
}
</script>

<template>
  <form
    class="new-player-form"
    @submit.prevent="
      setNewPlayer(newPlayer);
      newPlayer.id++;
    "
  >
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
        <input
          type="number"
          id="strength"
          name="strength"
          v-model="newPlayer.stats.strength"
        />
      </div>
      <div>
        <label for="stamina">Stamina:</label>
        <input
          type="number"
          id="stamina"
          name="stamina"
          v-model="newPlayer.stats.stamina"
        />
      </div>
      <div>
        <label for="magic">Magic:</label>
        <input
          type="number"
          id="magic"
          name="magic"
          v-model="newPlayer.stats.magic"
        />
      </div>
      <div>
        <label for="spirit">Spirit:</label>
        <input
          type="number"
          id="spirit"
          name="spirit"
          v-model="newPlayer.stats.spirit"
        />
      </div>
      <div>
        <label for="speed">Speed:</label>
        <input
          type="number"
          id="speed"
          name="speed"
          v-model="newPlayer.stats.speed"
        />
      </div>
    </div>
    <div class="drachmas block">
      <div>
        <label for="currentDrachmas">Current Drachmas:</label>
        <input
          type="number"
          id="currentDrachmas"
          name="currentDrachmas"
          v-model="newPlayer.currentDrachmas"
        />
      </div>
      <div>
        <label for="totalDrachmas">Total Drachmas:</label>
        <input
          type="number"
          id="totalDrachmas"
          name="totalDrachmas"
          v-model="newPlayer.totalDrachmas"
        />
      </div>
    </div>
    <input type="submit" value="Create Character" />
  </form>
</template>

<style scoped>
.new-player-form {
  margin-left: 1rem;
  display: flex;
  flex-flow: row nowrap;
  height: 130px;
  width: 700px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.01);
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.4);
  padding: 1em;
  border-radius: 15px;
}

/* {
  justify-content: center;
  align-items: center;
  background: var(--greyLight-1);
} */
input {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  margin: 2px;
  padding: 2px;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.4);
  outline: 0;
  background-color: var(--color-border);
  border-radius: 5px;
  color: var(--color-background);
}

input:focus {
  box-shadow: 0 3px 3px rgba(204, 118, 161, 0.4);
}

input[type="number"] {
  max-width: 50px;
  text-align: center;
}

input[type="text"],
select {
  width: 150px;
}

input[type="submit"] {
  height: 25%;
  max-height: 50px;
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
