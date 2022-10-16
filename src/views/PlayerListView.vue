<template>
  <div class="player-list">
    <h1>This is the player list Page</h1>

    <AddPlayerForm />

    <PlayerList />
  </div>
</template>
<script setup lang="ts">
import PlayerList from "@/components/Players/PlayerList.vue";
import AddPlayerForm from "../components/Players/AddPlayerForm.vue";



</script>
