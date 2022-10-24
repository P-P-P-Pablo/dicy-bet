<script setup lang="ts">
import { RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="app">
    <header>
      <img
        alt="Dice logo"
        class="logo"
        src="@\assets\d6_128x128.png"
        width="128"
        height="128"
      />

      <div class="wrapper">
        <HelloWorld msg="Dicy Bet" />

        <BetterNav />
      </div>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100%;
}
header {
  position: fixed;
  left: 0;
  top: 0;
  padding-left: 3vw;
  padding-top: 3vh;
  line-height: 1.5;
  max-height: 100vh;
  width: 20vw;
  height: 100%;
}

main {
  position: fixed;
  right: 0;
  top: 0;
  margin-left: 10vw;
  text-align: right;
  width: 80vw;
  padding-right: 3vw;
  padding-top: 3vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
