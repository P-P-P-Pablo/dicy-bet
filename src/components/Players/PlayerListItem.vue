<template>
  <div class="player">
    <GodsIcon class="god-icon" :choose-god="player.type" />
    <div class="details">
      <div class="identity block">
        <h3>Player : {{ player.name }}</h3>
        <div>Type : {{ player.type }}</div>
      </div>
      <div class="stats block">
        <div>PV : {{ player.stats.pv }}</div>
        <div>Strength : {{ player.stats.strength }}</div>
        <div>Stamina : {{ player.stats.stamina }}</div>
        <div>Magic : {{ player.stats.magic }}</div>
        <div>Spirit : {{ player.stats.spirit }}</div>
        <div>Speed : {{ player.stats.speed }}</div>
      </div>
      <div class="drachmas block">
        <div>Current Drachmas : {{ player.currentDrachmas }}</div>
        <div>Total Drachmas : {{ player.totalDrachmas }}</div>
      </div>
      <div class="in-game block">
        <div>In This Game ?</div>
        <div>{{ player.inGame ? "Yes" : "No" }}</div>
        <button @click="checkInOut(player.inGame, player.id)">
          {{ player.inGame ? "Check-in Player" : "Check-out Player" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type Player from "@/types/Player";
import GodsIcon from "../icons/Gods-Icon.vue";
import { usePlayers } from "@/stores/players";
const playerStore = usePlayers();
defineProps<{
  player: Player;
}>();

function checkInOut(inGame: boolean, id: number) {
  if (inGame) {
    playerStore.checkOutPlayer(id);
  } else {
    playerStore.checkInPlayer(id);
  }
}
</script>

<style lang="scss" scoped>
.god-icon {
  max-height: 50px;
}

.player {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  border: 2px solid var(--color-border);
  border-radius: 20px;
  transition: all 150ms linear;
  white-space: pre-wrap;
  padding: 3px 8px;
  box-shadow: 2px 5px 10px #353866;
  height: 100px;
  width: 50%;

  &:hover {
    transition: all 150ms linear;

    opacity: 0.75;
  }

  &:active {
    transition: all 150ms linear;
    opacity: 0.65;
  }

  &:focus {
    outline: 1px dotted #959595;
    outline-offset: -2px;
  }
}

.details {
  margin-left: 1rem;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  width: 100%;
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

  div {
    margin: 0 2px;
  }
}

.drachmas {
  font-size: 0.6rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
  text-transform: capitalize;
}
</style>
