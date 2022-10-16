<script setup lang="ts">
import PlayerListItem from "./PlayerListItem.vue";
import { usePlayers } from "@/stores/players";

const playerStore = usePlayers();
const playerList = playerStore.players;
</script>

<template>
  <ul class="player-list">
    <li v-for="player in playerList" :key="player.id">
      <PlayerListItem :player="player" />
    </li>
  </ul>
</template>

<style scoped>
.player-list {
  display: flex;
  flex-flow: column-reverse;
  list-style-type: none;
}
</style>
