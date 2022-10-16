<template>
  <img :src="getPNG(chooseGod)" :alt="chooseGod" />
</template>
<script setup lang="ts">
defineProps<{
  chooseGod: string | undefined;
}>();
function getPNG(type: string | undefined): string {
  switch (type) {
    case "Guerre":
      return "public/ares.png";
    case "Sagesse":
      return "public/athena.png";
    case "Liberté":
      return "public/hermes.png";
    case "Souverain":
      return "public/zeus.png";
    case "Mort":
      return "public/hades.png";
    case "Forge":
      return "public/hephaistos.png";
    case "Péché":
      return "public/dionysos.png";
    case "Marin":
      return "public/poseidon.png";
    case "Union":
      return "public/hera.png";
    case "Sacre":
      return "public/hestia.png";
    case "Chasse":
      return "public/artemis.png";
    case "Art":
      return "public/apollon.png";
    case "Passion":
      return "public/aphrodite.png";
    case "Nature":
      return "public/demeter.png";
    default:
      return "public/player.png";
  }
}
</script>
