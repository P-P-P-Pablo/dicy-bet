<script setup lang="ts">
import NavItem from "./NavItem.vue";
import BlackDice1 from "@/components/icons/BlackDice1.vue";
import BlackDice2 from "@/components/icons/BlackDice2.vue";
import BlackDice3 from "@/components/icons/BlackDice3.vue";
</script>

<template>
  <nav>
    <RouterLink to="/">
      <NavItem class="betternav-option">
        <template #icon>
          <BlackDice1 />
        </template>
        <template #heading>Home</template>

        Go To Home Page
      </NavItem>
    </RouterLink>

    <RouterLink to="/players">
      <NavItem class="betternav-option">
        <template #icon>
          <BlackDice2 />
        </template>
        <template #heading>Players List</template>

        Go check the list of all Players
      </NavItem>
    </RouterLink>

    <RouterLink to="/about">
      <NavItem class="betternav-option">
        <template #icon>
          <BlackDice3 />
        </template>
        <template #heading>About</template>

        Go to About Page
      </NavItem>
    </RouterLink>
  </nav>
</template>
<style scoped>
.betternav-option {
  margin-left: 40px;
}
</style>
